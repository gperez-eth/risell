import React from "react";
import { PandaIcon } from "@components/atoms";
import { View, Pressable, StyleSheet, Platform } from "react-native";
import { ICONS } from "@utils/constants/Icons";
import { NAV_SCREENS } from "@utils/index";

export function PandaTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
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
          <Pressable
            key={index}
            onPress={onPress}
            style={
              route.name === NAV_SCREENS.ADD_PRODUCT
                ? styles.iconFloatButton
                : styles.iconButton
            }
          >
            <PandaIcon
              icon={ICONS[route.name]}
              style={
                !isFocused && route.name !== NAV_SCREENS.ADD_PRODUCT
                  ? styles.iconLight
                  : styles.icon
              }
              size={25}
            />
            {isFocused && (
              <View
                style={
                  route.name !== NAV_SCREENS.ADD_PRODUCT && styles.indicator
                }
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
  },
  iconButton: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFloatButton: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#215BF0",
    height: 50,
    width: 50,
    borderRadius: 100,
    top: -30,
  },
  icon: {
    color: "white",
  },
  iconLight: {
    color: "rgba(255,255,255,0.6)",
  },
  indicator: {
    borderBottomColor: "#215BF0",
    borderBottomWidth: 3,
    borderRadius: 20,
    marginTop: 5,
    width: 25,
    opacity: 0.8,
  },
});
