import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { PandaAvatarProps } from "@utils/Types/PandaAvatar";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { PandaInput, PandaPressable, PandaText } from "@components/Themed";
import { TextInput } from "react-native-gesture-handler";
import Colors from "@utils/constants/Colors";
import useColorScheme from "hooks/useColorScheme";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { PandaIcon } from "../PandaIcon/PandaIcon";
import { ICONS } from "@utils/constants/Icons";
import { productState } from "@utils/index";

type PandaPressableInputFormProps = {
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  pressAction: () => void;
  value: number;
};

export function PandaPressableInputForm({
  ...props
}: PandaPressableInputFormProps) {
  const theme = useColorScheme();
  return (
    <View style={props.style}>
      {props.value && (
        <Animated.View entering={FadeInDown.duration(300)}>
          <PandaText style={styles.placeholder}>{props.placeholder}</PandaText>
        </Animated.View>
      )}
      <PandaPressable
        darkColor={Colors.dark[800]}
        lightColor={Colors.light[300]}
        customStyle={styles.input}
        onPress={props.pressAction}
      >
        {props.value ? (
          <View>
            <PandaText
              darkColor={Colors.dark[100]}
              lightColor={Colors.dark[200]}
              style={styles.tag}
            >
              {productState[props.value - 1].status}
            </PandaText>
            <PandaText
              darkColor={Colors.dark[100]}
              lightColor={Colors.dark[500]}
              style={styles.description}
              numberOfLines={2}
            >
              {productState[props.value - 1].description}
            </PandaText>
          </View>
        ) : (
          <PandaText
            darkColor={Colors.dark[600]}
            lightColor={Colors.light[900]}
            style={styles.tag}
          >
            {props.placeholder}
          </PandaText>
        )}
        <PandaIcon
          style={styles.rightIndicator}
          icon={ICONS.RIGHT_INDICATOR}
          color={theme === "dark" ? Colors.dark[700] : Colors.dark[500]}
        />
      </PandaPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    fontFamily: "Montserrat-Bold",
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 5,
  },
  tag: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  description: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    marginTop: 5,
    marginRight: 17,
  },
  rightIndicator: {
    marginLeft: "auto",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
