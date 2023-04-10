import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { generateBoxShadowStyle } from "@utils/index";
import { PandaPressable } from "@components/Themed";
import Colors from "@utils/constants/Colors";

type PandaButtonProps = {
  children: JSX.Element | JSX.Element[];
  color?: string;
  pressAction: () => void;
  style?: StyleProp<ViewStyle>;
  shadow?: boolean;
  disabled?: boolean;
};

export function PandaButton({ ...props }: PandaButtonProps) {
  const shadowStyle =
    props.shadow &&
    generateBoxShadowStyle(1, 0, props.color, 0.7, 7, 5, props.color);
  return (
    <PandaPressable
      darkColor={props.disabled ? Colors.dark[800] : Colors.dark[100]}
      lightColor={Colors.dark[900]}
      disabled={props.disabled}
      customStyle={[
        styles.button,
        props.style,
        props.color && { backgroundColor: props.color },
        shadowStyle,
      ]}
      onPress={props.pressAction}
    >
      {props.children}
    </PandaPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
});
