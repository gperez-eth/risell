import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { PandaSearchBar } from "@components/molecules";
import { PandaCategorySlider } from "@components/organisms";
import { PandaMasonryItemSlider } from "@components/organisms/PandaMasonryItemSlider/PandaMasonryItemSlider";
import { useFetchHomeProducts } from "hooks/useProducts";

type DefaultHomeScreenProps = {
  navigation: any;
};

export function DefaultHomeScreen({ ...props }: DefaultHomeScreenProps) {
  const { data: products, isLoading } = useFetchHomeProducts();

  const categoryObjects = [
    { title: "Near you", icon: "MAP_CARD" },
    { title: "Marketplace", icon: "MARKETPLACE_CARD" },
    { title: "Live Auctions", icon: "LIVE_AUCTIONS_CARD" },
    { title: "Crypto", icon: "BITCOIN" },
  ];

  function headerComponent() {
    return (
      <View>
        <Pressable
          style={styles.searchBarContainer}
          onPress={() => props.navigation.navigate("Search")}
        >
          <PandaSearchBar />
        </Pressable>

        <View style={styles.categoryContainer}>
          <PandaCategorySlider categoryData={categoryObjects} />
        </View>
      </View>
    );
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <PandaMasonryItemSlider
        headerComponent={headerComponent}
        data={products}
        cardOnPress={(productId) =>
          props.navigation.navigate("Product", { id: productId })
        }
      />
      {/* <PandaRecommendationSlider
          productData={productData}
          title={"For the gamers"}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  searchBarContainer: {
    paddingHorizontal: 20,
  },
  categoryContainer: {
    paddingTop: 20,
  },
});
