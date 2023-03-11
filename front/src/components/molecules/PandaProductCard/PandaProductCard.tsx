import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { ProductCardProps } from "@utils/Types";
import { PandaText, PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import PandaCountdown from "@components/atoms/PandaCountdown/PandaCountdown";

type PandaProductCardProps = {
  cardData: ProductCardProps;
}

export function PandaProductCard({ ...props }: PandaProductCardProps) {

  return (
    <PandaView
      darkColor={Colors.dark.productCard}
      lightColor={Colors.light.productCard}
      shadow
      style={[
        styles.container,
        props.cardData.isAuction && styles.auctionCard,
      ]}
    >
      <View>
        <Image
          style={[
            styles.productImage,
            props.cardData.isAuction && styles.auctionCardImage,
          ]}
          source={{
            uri: props.cardData.images[props.cardData.images.length - 1].uri,
            headers: { Authorization: "someAuthToken" },
          }}
          contentFit={"cover"}
        />
        <View style={styles.typeOfSellingContainer}>
          <PandaIcon
            color="#FFFFFF"
            icon={props.cardData.isShippable ? ICONS.TRUCK : ICONS.BOX}
            size={15}
          />
        </View>

        {props.cardData.isAuction && (
          <View style={styles.auctionTimeContainer}>
            <PandaIcon color="#FACA21" icon={ICONS.CLOCK} size={15} />
            <PandaCountdown auctionEndTime={props.cardData.auction[0].expirationTime} style={styles.auctionTimeText}/>
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
          {props.cardData.title}
        </PandaText>
        {props.cardData.isAuction && (
          <Text style={styles.maxBidTitle}>Highest Bid</Text>
        )}
        <View style={styles.priceInfoContainer}>
          <PandaText
            darkColor={Colors.dark.productCardCurrency}
            lightColor={Colors.light.productCardCurrency}
            style={styles.maxBid}
          >
            {props.cardData.price / 100} {props.cardData.currency.currency_code + props.cardData.currency.currency_symbol}
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
    fontSize: 12,
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
