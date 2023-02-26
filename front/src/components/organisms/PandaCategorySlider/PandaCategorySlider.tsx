import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { FlashList } from "@shopify/flash-list";
import { PandaCategoryCard } from "@components/molecules";

type PandaCategorySliderProps = {
  categoryData: { title: string; icon: string }[];
};

export function PandaCategorySlider({ ...props }: PandaCategorySliderProps) {
  function CategoryCardRender(item) {
    return (
      <Pressable
        onPress={() => console.log("asdfasfd")}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
      >
        <PandaCategoryCard itemData={item} />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={props.categoryData}
        renderItem={({ item }) => CategoryCardRender(item)}
        estimatedItemSize={115}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    paddingHorizontal: 20,
  },
});
