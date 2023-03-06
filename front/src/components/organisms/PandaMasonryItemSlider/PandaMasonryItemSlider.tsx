import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import { PandaProductCard } from "@components/molecules";
import { PandaMasonryItemSliderProps } from "@utils/Types/PandaMasonryItemSlider";

export function PandaMasonryItemSlider({
  ...props
}: PandaMasonryItemSliderProps) {
  function ProductCardRender(item, columnIndex) {
    return (
      <Pressable
        onPress={() => props.itemOnPress(item)}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          columnIndex % 2 === 0
            ? styles.leftColumnPadding
            : styles.rightColumnPadding,
        ]}
      >
        <PandaProductCard productData={item} />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      <MasonryFlashList
        ListHeaderComponent={props.headerComponent}
        ListHeaderComponentStyle={styles.listHeader}
        data={props.productData}
        renderItem={({ item, columnIndex }) =>
          ProductCardRender(item, columnIndex)
        }
        estimatedItemSize={240}
        numColumns={2}
        contentContainerStyle={styles.list}
        centerContent
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
  },
  listHeader: {
    marginBottom: 20,
  },
  list: {
    paddingBottom: 100,
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
