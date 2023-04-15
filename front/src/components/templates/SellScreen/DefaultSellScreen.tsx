import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PandaPillList, PandaSearchBar } from "@components/molecules";
import { PandaCategorySlider, PandaHomeHeader } from "@components/organisms";
import { PandaMasonryItemSlider } from "@components/organisms/PandaMasonryItemSlider/PandaMasonryItemSlider";
import { useFetchHomeProducts } from "hooks/useProducts";
import { BlurView, BlurTint } from "expo-blur";
import Colors from "@utils/constants/Colors";
import { Image } from "expo-image";

type DefaultSellScreenProps = {
  navigation: any;
};

export function DefaultSellScreen({ ...props }: DefaultSellScreenProps) {
  return <View></View>;
}

const styles = StyleSheet.create({});
