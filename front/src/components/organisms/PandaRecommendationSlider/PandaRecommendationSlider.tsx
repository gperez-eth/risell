import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { FlashList } from "@shopify/flash-list";
import { PandaProductCard } from "@components/molecules";

type PandaRecommendationSliderProps = {
  productData: {
    isShippable: boolean;
    isAuction: string;
    title: string;
    currentPrice: string;
    uri: string;
  }[];
  title?: String;
};

export function PandaRecommendationSlider({
  ...props
}: PandaRecommendationSliderProps) {
  function ProductCardRender(item) {
    return (
      <Pressable
        onPress={() => console.log("asdfasfd")}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
      >
        <PandaProductCard productData={item} />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      <FlashList
        data={props.productData}
        renderItem={({ item }) => ProductCardRender(item)}
        estimatedItemSize={170}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
});
