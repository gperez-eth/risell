import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { PandaAvatarProps } from "@utils/Types/PandaAvatar";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";

export function PandaAvatar({ ...props }: PandaAvatarProps) {
  return (
    <Image
      style={styles.avatar}
      source={{ uri: props.avatar }}
      contentFit={"cover"}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 33,
  },
});
