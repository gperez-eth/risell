import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import { PandaProductCard } from "@components/molecules";
import { GetProductsQuery } from "@graphql/__generated__/risell";
import { ProductCardProps } from "@utils/Types";
import { Dimensions } from "react-native";

type PandaMasonryItemSliderProps = {
  data: GetProductsQuery;
  cardOnPress: (id: string) => void;
  title?: String;
};

export function PandaMasonryItemSlider({
  ...props
}: PandaMasonryItemSliderProps) {
  function ProductCardRender(product: ProductCardProps, columnIndex: number) {
    return (
      <Pressable
        onPress={() => props.cardOnPress(product.id)}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          columnIndex % 2 === 0
            ? styles.leftColumnPadding
            : styles.rightColumnPadding,
        ]}
      >
        <PandaProductCard cardData={product} />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={props.data.products}
        renderItem={({ item, columnIndex }) =>
          ProductCardRender(item, columnIndex)
        }
        estimatedItemSize={240}
        numColumns={2}
        contentContainerStyle={styles.list}
        centerContent
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 15,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Dimensions.get("screen").height,
  },
  list: {
    paddingBottom: 100,
    paddingTop: 200,
  },
  leftColumnPadding: {
    marginLeft: 20,
    marginRight: 4,
  },
  rightColumnPadding: {
    marginRight: 20,
    marginLeft: 4,
  },
  title: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 20,
  },
});
