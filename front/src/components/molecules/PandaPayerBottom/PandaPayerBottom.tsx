import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { PandaText, PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaButton } from "@components/atoms/PandaButton/PandaButton";
import PandaCountdown from "@components/atoms/PandaCountdown/PandaCountdown";

type PandaPayerBottomProps = {
  onBid: (index: number) => void;
  payInfo: {
    isShippable: boolean;
    isAuction: boolean;
    price: number;
    highestBid: number;
    expirationTime: string;
  };
};

export function PandaPayerBottom({ ...props }: PandaPayerBottomProps) {
  function renderTypeBottom() {
    if (props.payInfo.isAuction) {
      return (
        <View style={styles.auctionContainer}>
          <View style={styles.infoGroup}>
            <View style={styles.bidPriceGroup}>
              <PandaText style={styles.bidText}>Highest Bid</PandaText>
              <PandaText style={styles.currentBidPrice}>
                {props.payInfo.highestBid / 100} €
              </PandaText>
            </View>
            <View style={styles.auctionInfoGroup}>
              <PandaText style={styles.bidText}>Auction Time</PandaText>
              <PandaCountdown
                auctionEndTime={props.payInfo.expirationTime}
                style={styles.auctionTime}
              />
            </View>
          </View>
          {props.payInfo.price ? (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <PandaButton
                style={{ flexGrow: 1, marginRight: 10 }}
                color={Colors.dark[100]}
                pressAction={() => props.onBid(0)}
              >
                <PandaText
                  darkColor={Colors.dark[900]}
                  lightColor={Colors.dark[100]}
                  style={styles.buttonText}
                >
                  Place Bid
                </PandaText>
              </PandaButton>
              <PandaButton
                style={{ flexGrow: 1 }}
                color={Colors.primary}
                pressAction={() => console.log("asdf")}
              >
                <PandaText style={styles.buttonText}>Buy Now</PandaText>
              </PandaButton>
            </View>
          ) : (
            <PandaButton
              shadow
              color="#0078FE"
              pressAction={() => console.log("asdf")}
            >
              <PandaText style={styles.buttonText}>Place Bid</PandaText>
            </PandaButton>
          )}
        </View>
      );
    } else {
      return <></>;
    }
  }

  return (
    <PandaView
      darkColor={Colors.dark[900]}
      lightColor={Colors.light.pandaPayerBottom}
      shadow
      style={[styles.container]}
    >
      {renderTypeBottom()}
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.dark[700],
  },
  auctionContainer: {},
  infoGroup: {
    flexDirection: "row",
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  bidPriceGroup: {},
  auctionInfoGroup: {
    marginLeft: "auto",
  },
  price: {
    fontSize: 32,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    padding: 7,
    textAlign: "center",
  },
  bidText: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    color: "#888888",
    marginBottom: 3,
  },
  currentBidPrice: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
  },
  auctionTime: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    color: "#FFFFFF",
  },
});
