import { PandaAvatar } from "@components/atoms";
import { PandaButton } from "@components/atoms/PandaButton/PandaButton";
import { PandaText } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

type PandaSellerHeaderProps = {
  sellerData: {
    avatar: string;
    username: string;
  };
};

export function PandaSellerHeader({ ...props }: PandaSellerHeaderProps) {
  return (
    <View style={styles.container}>
      <PandaAvatar avatar={props.sellerData.avatar} />
      <View style={styles.usernameContainer}>
        <PandaText style={styles.sellerText}>Seller</PandaText>
        <PandaText style={styles.username}>
          @{props.sellerData.username}
        </PandaText>
      </View>
      <PandaButton
        shadow
        color={Colors.defaultButton}
        style={styles.button}
        pressAction={() => console.log("afadsf")}
      >
        <PandaText style={styles.buttonText}>Chat</PandaText>
      </PandaButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  usernameContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  sellerText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#9B9B9B",
  },
  username: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  buttonText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 17,
    color: "#fff",
  },
  button: {
    marginLeft: "auto",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    textAlign: "center",
    alignItems: "flex-end",
  },
});
