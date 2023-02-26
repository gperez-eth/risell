import React from "react";
import { StyleSheet, View } from "react-native";
import { PandaSwiper } from "@components/molecules";
import { DefaultProductScreenProps } from "@utils/Types";
import { PandaText } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaSellerHeader } from "@components/molecules/PandaSellerHeader/PandaSellerHeader";
import dayjs from "dayjs";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { PandaPayerBottom } from "@components/molecules/PandaPayerBottom/PandaPayerBottom";

export function DefaultProductScreen({ ...props }: DefaultProductScreenProps) {
  return (
    <View style={styles.container}>
      <PandaSwiper
        images={props.itemData.images}
        backAction={props.navigation.goBack}
      />
      <View style={styles.infoContainer}>
        <PandaText
          lightColor={Colors.light.text}
          darkColor={Colors.dark.text}
          style={styles.productTitle}
        >
          {props.itemData.title}
        </PandaText>
        <PandaSellerHeader sellerData={props.sellerData} />
        <PandaText
          lightColor={Colors.light.text}
          darkColor={Colors.dark.text}
          style={styles.description}
        >
          {props.itemData.description}
        </PandaText>
        <View style={styles.stadisticsContainer}>
          <PandaText
            lightColor={Colors.light.productDescription}
            darkColor={Colors.dark.productDescription}
            style={styles.lastTimeEdited}
          >
            Ultima edición{" "}
            {dayjs(props.itemData.lastEdited).format("h:mm A · DD MMM YYYY")}
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
              {props.itemData.views}
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
              {props.itemData.likes}
            </PandaText>
          </View>
        </View>
      </View>
      <PandaPayerBottom payInfo={props.itemData} />
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
  },
  stadisticsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
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
