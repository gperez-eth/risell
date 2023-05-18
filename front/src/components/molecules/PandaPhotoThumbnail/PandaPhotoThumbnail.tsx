import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { width } from "@fortawesome/free-solid-svg-icons/faHouse";

type PandaPhotoThumbnailProps = {
  uri: string;
};

export function PandaPhotoThumbnail({ ...props }: PandaPhotoThumbnailProps) {
  return (
    <View>
      <Image style={styles.image} source={{ uri: props.uri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
});
