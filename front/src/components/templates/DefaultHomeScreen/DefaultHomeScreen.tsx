import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { PandaSearchBar } from "@components/molecules";
import { PandaCategorySlider } from "@components/organisms";
import { PandaMasonryItemSlider } from "@components/organisms/PandaMasonryItemSlider/PandaMasonryItemSlider";
import { risellClient } from "@graphql/index";

type DefaultHomeScreenProps = {
  navigation: any;
};

export function DefaultHomeScreen({ ...props }: DefaultHomeScreenProps) {

  risellClient.getProducts().then((data) => {
    console.log(data)
  })

  const data = [
    { title: "Near you", icon: "MAP_CARD" },
    { title: "Marketplace", icon: "MARKETPLACE_CARD" },
    { title: "Live Auctions", icon: "LIVE_AUCTIONS_CARD" },
    { title: "Crypto", icon: "BITCOIN" },
  ];

  const productData = [
    {
      title: "3DS XL Pikachu Edition",
      uri: "https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/00/00bbd7e3-df27-4d5a-a306-956557e3cd31?rule=$_59.JPG",
      isShippable: false,
      isAuction: "",
      currentPrice: "355",
      avatar:
        "https://alfabetajuega.com/hero/2022/03/one-piece-monkey-d-luffy.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    },
    {
      title: "Pokemon Cristal GBC precintado",
      uri: "https://cdn.wallapop.com/images/10420/de/ui/__/c10420p810998034/i2793715903.jpg?pictureSize=W640",
      isShippable: false,
      isAuction: "dsf",
      currentPrice: "355",
      avatar:
        "https://alfabetajuega.com/hero/2022/03/one-piece-monkey-d-luffy.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    },
    {
      title: "Xenoblade Chronicles 3 Switch en perfecto estado",
      uri: "https://cdn.wallapop.com/images/10420/e5/ii/__/c10420p855788834/i3024902838.jpg?pictureSize=W640",
      isShippable: false,
      isAuction: "dsf",
      currentPrice: "355",
      avatar:
        "https://alfabetajuega.com/hero/2022/03/one-piece-monkey-d-luffy.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    },
    {
      title: "Xbox Series X EDICION HALO",
      uri: "https://cdn.wallapop.com/images/10420/e8/nv/__/c10420p861076772/i3054684992.jpg?pictureSize=W640",
      isShippable: false,
      isAuction: "",
      currentPrice: "355",
      avatar:
        "https://alfabetajuega.com/hero/2022/03/one-piece-monkey-d-luffy.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    },
    {
      title: "Pokemon Zafiro GBA",
      uri: "https://cdn.wallapop.com/images/10420/e9/ab/__/c10420p862124545/i3060005077.jpg?pictureSize=W640",
      isShippable: false,
      isAuction: "dsf",
      currentPrice: "355",
      avatar:
        "https://alfabetajuega.com/hero/2022/03/one-piece-monkey-d-luffy.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    },
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
          <PandaCategorySlider categoryData={data} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PandaMasonryItemSlider
        headerComponent={headerComponent}
        productData={productData}
        itemOnPress={(item) =>
          props.navigation.navigate("Product", { itemData: item })
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
