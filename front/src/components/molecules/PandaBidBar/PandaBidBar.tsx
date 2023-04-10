import { PandaAvatar } from "@components/atoms";
import { PandaText } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import dayjs from "dayjs";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

type PandaBidBarProps = {
  bidData: {
    avatar: string;
    username: string;
    amount: number;
    bidTime: string;
    currencySymbol: string;
  };
};

export function PandaBidBar({ ...props }: PandaBidBarProps) {
  return (
    <Animated.View entering={FadeInUp.duration(1000)} style={styles.container}>
      <PandaAvatar avatar={props.bidData.avatar} />
      <View style={styles.bidInfoContainer}>
        <PandaText style={styles.bidText}>
          Bid place by @{props.bidData.username}
        </PandaText>
        <PandaText style={styles.bidTimeText}>
          {dayjs(props.bidData.bidTime).format("MMMM D, YYYY h:mm A")}
        </PandaText>
      </View>
      <PandaText style={styles.bidAmountText}>
        {props.bidData.amount / 100} {props.bidData.currencySymbol}
      </PandaText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  bidInfoContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  bidText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
  },
  bidTimeText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 13,
    marginTop: 5,
  },
  bidAmountText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 13,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginLeft: "auto",
  },
});
