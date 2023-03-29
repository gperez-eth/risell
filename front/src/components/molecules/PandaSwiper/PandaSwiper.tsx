import React from "react";
import { StyleSheet, View, Pressable, Dimensions } from "react-native";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";

const windowWidth = Dimensions.get("window").width;

type PandaSwiperProps = {
  images: { uri: string }[];
  backAction?: any;
};

export function PandaSwiper({ ...props }: PandaSwiperProps) {
  const listRenderItem = ({ item }) => {
    return (
      <Image
        style={styles.productImage}
        source={{
          uri: item.uri,
        }}
        contentFit={"cover"}
      />
    );
  };

  return (
    <View style={styles.swiperContainer}>
      <FlashList
        renderItem={listRenderItem}
        data={props.images}
        pagingEnabled
        horizontal
        estimatedItemSize={400}
      />
      {props.backAction && (
        <Pressable
          style={[styles.swiperButtons, styles.backButton]}
          onPress={props.backAction}
        >
          <PandaIcon color="#FFFFFF" icon={ICONS.LEFT_ARROW} size={33} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: 350,
    width: windowWidth,
  },
  productImage: {
    height: 350,
    width: windowWidth,
  },
  swiperButtons: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
    height: 50,
    width: 50,
  },
  backButton: {
    top: 0,
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: "#00000080",
  },
});
