import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { PandaButtonProps } from "@utils/Types";
import { generateBoxShadowStyle } from "@utils/index";

export function PandaButton({ ...props }: PandaButtonProps) {
  const shadowStyle =
    props.shadow &&
    generateBoxShadowStyle(1, 0, props.color, 0.7, 7, 5, props.color);

  return (
    <Pressable
      style={[
        styles.button,
        props.style,
        { backgroundColor: props.color },
        shadowStyle,
      ]}
      onPress={props.pressAction}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
});
