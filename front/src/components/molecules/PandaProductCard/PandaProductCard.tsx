import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { ProductCardProps } from "@utils/Types";
import { PandaText, PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";

export function PandaProductCard({ ...props }: ProductCardProps) {
  return (
    <PandaView
      darkColor={Colors.dark.productCard}
      lightColor={Colors.light.productCard}
      shadow
      style={[
        styles.container,
        props.productData.isAuction && styles.auctionCard,
      ]}
    >
      <View>
        <Image
          style={[
            styles.productImage,
            props.productData.isAuction && styles.auctionCardImage,
          ]}
          source={{
            uri: props.productData.uri,
            headers: { Authorization: "someAuthToken" },
          }}
          contentFit={"cover"}
        />
        <View style={styles.typeOfSellingContainer}>
          <PandaIcon
            color="#FFFFFF"
            icon={props.productData.isShippable ? ICONS.TRUCK : ICONS.BOX}
            size={15}
          />
        </View>

        {props.productData.isAuction && (
          <View style={styles.auctionTimeContainer}>
            <PandaIcon color="#FACA21" icon={ICONS.BOLT} size={15} />
            <Text style={styles.auctionTimeText}>12h : 26m : 13s</Text>
          </View>
        )}
      </View>
      <View style={styles.productInfoContainer}>
        <PandaText
          darkColor={Colors.dark.text}
          lightColor={Colors.light.text}
          style={styles.productTitle}
          numberOfLines={1}
        >
          {props.productData.title}
        </PandaText>
        {props.productData.isAuction && (
          <Text style={styles.maxBidTitle}>Highest Bid</Text>
        )}
        <View style={styles.priceInfoContainer}>
          <PandaIcon color="#00FFC2" icon={ICONS.ETHEREUM} />
          <PandaText
            darkColor={Colors.dark.productCardCurrency}
            lightColor={Colors.light.productCardCurrency}
            style={styles.maxBid}
          >
            0,1944 ETH
          </PandaText>
        </View>
      </View>
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 3,
    height: 205,
  },
  auctionCard: {
    height: 280,
  },
  auctionCardImage: {
    height: 190,
  },
  typeOfSellingContainer: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
    height: 27,
    width: 27,
    top: 0,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: "#00000060",
  },
  auctionTimeContainer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 33,
    bottom: 0,
    marginBottom: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    backgroundColor: "#00000060",
  },
  auctionTimeText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: 5,
  },
  productImage: {
    height: 140,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  productInfoContainer: {
    paddingTop: 5,
    paddingHorizontal: 7,
  },
  productTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  maxBidTitle: {
    marginTop: 10,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 10,
    color: "#888888",
  },
  priceInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  maxBid: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginLeft: 3,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 11,
    marginTop: 10,
  },
});
