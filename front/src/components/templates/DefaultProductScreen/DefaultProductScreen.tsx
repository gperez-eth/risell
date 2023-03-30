import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { PandaBidBar, PandaSwiper } from "@components/molecules";
import { PandaText } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaSellerHeader } from "@components/molecules/PandaSellerHeader/PandaSellerHeader";
import dayjs from "dayjs";
import { PandaIcon, PandaToggle } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { PandaPayerBottom } from "@components/molecules/PandaPayerBottom/PandaPayerBottom";
import { useFetchProduct } from "hooks/useProduct";
import { ProductDataProps } from "@utils/Types/ProductData";
import { FlashList } from "@shopify/flash-list";
import { ScrollView } from "react-native-gesture-handler";

type DefaultProductScreenProps = {
  navigation: any;
  productId: string;
};

export function DefaultProductScreen({ ...props }: DefaultProductScreenProps) {
  const { productId } = props;
  const { data, isLoading, isSuccess } = useFetchProduct(productId);

  const changeBarOption = (index: number) => {
    let updatedOtionsMenu = [...optionsMenuDefault];
    updatedOtionsMenu[index] = { ...updatedOtionsMenu[index], isActive: true };
    setOptionsMenu(updatedOtionsMenu);
    setOptionsMenuSelected(index);
  };

  const optionsMenuDefault = [
    { optionText: "Info", isActive: false },
    { optionText: "Bid History", isActive: false },
  ];

  const [optionsMenu, setOptionsMenu] = useState(optionsMenuDefault);
  const [optionsMenuSelected, setOptionsMenuSelected] = useState(0);

  useEffect(() => {
    optionsMenu[0].isActive = true;
  }, []);

  if (isLoading) {
    console.log("loading...");
    return <></>;
  }

  const productData: ProductDataProps = data.product[0];

  const stadisticsSection = () => {
    return (
      <View style={styles.stadisticsContainer}>
        <PandaText
          lightColor={Colors.light.productDescription}
          darkColor={Colors.dark.productDescription}
          style={styles.lastTimeEdited}
        >
          Ultima edición{" "}
          {dayjs(productData.editedAt).format("h:mm A · DD MMM YYYY")}
        </PandaText>
        <View
          style={{
            flexDirection: "row",
            marginLeft: "auto",
          }}
        >
          <PandaIcon icon={ICONS.EYE} color={"#FFF"} />
          <PandaText
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            style={styles.stadisticsItem}
          >
            {productData.views}
          </PandaText>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 15,
          }}
        >
          <PandaIcon icon={ICONS.HEART} color={"#FFF"} />
          <PandaText
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            style={styles.stadisticsItem}
          >
            {productData.likes}
          </PandaText>
        </View>
      </View>
    );
  };

  const bidHistorySection = () => {
    return (
      <View style={{ height: 400, marginTop: 10 }}>
        <FlashList
          estimatedItemSize={75}
          data={productData.auction?.bids}
          renderItem={({ item }) => (
            <PandaBidBar
              bidData={{
                avatar: item.user.avatar,
                username: item.user.username,
                amount: item.amount,
                bidTime: item.bidTime,
                currencySymbol: productData.currency.currency_symbol,
              }}
            />
          )}
        />
      </View>
    );
  };

  const menuComponents = [stadisticsSection, bidHistorySection];

  return (
    <View style={styles.container}>
      <PandaSwiper
        images={productData.images}
        backAction={props.navigation.goBack}
      />
      <ScrollView style={styles.infoContainer}>
        <PandaText
          lightColor={Colors.light.text}
          darkColor={Colors.dark.text}
          style={styles.productTitle}
        >
          {productData.title}
        </PandaText>
        <PandaSellerHeader sellerData={productData.user} />
        <PandaText
          lightColor={Colors.light.text}
          darkColor={Colors.dark.text}
          style={styles.description}
        >
          {productData.description}
        </PandaText>
        {productData.isAuction && (
          <PandaToggle
            options={optionsMenu}
            onChangeMenuOption={(index) => changeBarOption(index)}
          />
        )}
        {menuComponents[optionsMenuSelected]()}
      </ScrollView>
      <PandaPayerBottom
        payInfo={{
          isAuction: productData.isAuction,
          isShippable: productData.isShippable,
          currentPrice: productData.price,
          highestBid: productData.auction?.bids[0]?.amount,
          expirationTime: productData.auction?.expirationTime,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  productTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
  },
  description: {
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
    marginTop: 10,
    marginBottom: 20,
  },
  stadisticsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  lastTimeEdited: {
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
  },
  stadisticsItem: {
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 5,
  },
});
