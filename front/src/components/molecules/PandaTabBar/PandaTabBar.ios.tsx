import React from "react";
import { PandaIcon } from "@components/atoms";
import { Pressable, StyleSheet, Platform, Text, View } from "react-native";
import { ICONS } from "@utils/constants/Icons";
import { BlurView } from "expo-blur";
import Colors from "@utils/constants/Colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import useColorScheme from "hooks/useColorScheme";
export function PandaTabBar({ state, descriptors, navigation }) {
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const theme = useColorScheme();
  return (
    <BlurView
      tint={theme}
      intensity={100}
      style={[styles.container, focusedOptions.tabBarStyle]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const animation = useSharedValue(1);

        const animatedIcon = useAnimatedStyle(() => {
          return {
            transform: [
              {
                scale: withTiming(
                  animation.value,
                  {
                    duration: 250,
                  },
                  () => {
                    animation.value = 1;
                  },
                ),
              },
            ],
          };
        });

        const onPress = () => {
          animation.value = 1.25;
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable key={index} onPress={onPress} style={styles.iconButton}>
            <Animated.View style={animatedIcon}>
              <PandaIcon
                icon={ICONS[route.name]}
                style={[
                  isFocused ? styles.routeFocused : styles.routeNoFocused,
                ]}
                size={22}
              />
            </Animated.View>
            <Text
              style={[
                styles.routeLabel,
                isFocused ? styles.routeFocused : styles.routeNoFocused,
              ]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === "ios" ? 40 : 10,
    paddingTop: 20,
    position: "absolute",
    bottom: 0,
  },
  routeWrapper: {
    alignItems: "center",
  },
  iconButton: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  routeLabel: {
    paddingTop: 5,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 11,
    textAlign: "center",
  },
  routeNoFocused: {
    color: "#AFAFAF",
  },
  routeFocused: {
    color: Colors.primary,
  },
});
