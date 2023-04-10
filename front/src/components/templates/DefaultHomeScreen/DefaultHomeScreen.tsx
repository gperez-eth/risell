import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PandaPillList, PandaSearchBar } from "@components/molecules";
import { PandaCategorySlider, PandaHomeHeader } from "@components/organisms";
import { PandaMasonryItemSlider } from "@components/organisms/PandaMasonryItemSlider/PandaMasonryItemSlider";
import { useFetchHomeProducts } from "hooks/useProducts";
import { BlurView, BlurTint } from "expo-blur";
import Colors from "@utils/constants/Colors";
import { Image } from "expo-image";

type DefaultHomeScreenProps = {
  navigation: any;
};

export function DefaultHomeScreen({ ...props }: DefaultHomeScreenProps) {
  const { data: products, isLoading } = useFetchHomeProducts();

  if (isLoading) {
    return <></>;
  }

  return (
    <View>
      <PandaMasonryItemSlider
        data={products}
        cardOnPress={(productId) =>
          props.navigation.navigate("Product", { id: productId })
        }
      />
      <PandaHomeHeader />

      {/* <PandaRecommendationSlider
          productData={productData}
          title={"For the gamers"}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
