import { StyleSheet } from "react-native";
import { PandaSafeView, PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { DefaultProductScreen } from "@components/templates/DefaultProductScreen/DefaultProductScreen";

export function ProductScreen({ navigation, ...props }) {
  const itemData = {
    title: "Xenoblade Chronicles 3 Switch en perfecto estado",
    images: [
      "https://cdn.wallapop.com/images/10420/e5/ii/__/c10420p855788834/i3024902838.jpg?pictureSize=W640",
      "https://cdn.wallapop.com/images/10420/e5/ii/__/c10420p855788834/i3024902838.jpg?pictureSize=W640",
      "https://cdn.wallapop.com/images/10420/e5/ii/__/c10420p855788834/i3024902838.jpg?pictureSize=W640",
    ],
    isShippable: false,
    isAuction: "2023-02-05T01:00:00Z",
    currentPrice: "355",
    description:
      "Vendo Pokemon esmeralda como se ve en la foto, estado seminuevo con algunas rozaduras.",
    category: "Videogames",
    lastEdited: "2023-01-29T22:04:00Z",
    views: 195,
    likes: 5,
    postCode: 28013,
    city: "Madrid",
    location: "",
  };

  const sellerData = {
    avatar:
      "https://alfabetajuega.com/hero/2022/03/one-piece-monkey-d-luffy.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    username: "monkeyDluffy",
  };

  return (
    <PandaView
      style={styles.container}
      lightColor={Colors.light.screenBackground}
      darkColor={Colors.dark.screenBackground}
    >
      <DefaultProductScreen
        itemData={itemData}
        sellerData={sellerData}
        navigation={navigation}
      />
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
