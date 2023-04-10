import { PandaText } from "@components/Themed";
import { PandaAvatar } from "@components/atoms";
import Colors from "@utils/constants/Colors";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

type PandaProductHeaderProps = {
  image: string;
  name: string;
  avatar: string;
  username: string;
};

export function PandaProductHeader({ ...props }: PandaProductHeaderProps) {
  return (
    <View style={styles.header}>
      <Image source={{ uri: props.image }} style={styles.productImage} />
      <View style={styles.headerInfo}>
        <PandaText style={styles.productTitle} numberOfLines={1}>
          {props.name}
        </PandaText>
        <View style={styles.sellerContainer}>
          <PandaAvatar avatar={props.avatar} />
          <View style={styles.sellerInfo}>
            <PandaText>Seller</PandaText>
            <PandaText style={styles.username}>@{props.username}</PandaText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productTitle: {
    fontSize: 17,
    fontFamily: "Montserrat-Bold",
  },
  productImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  sellerContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.dark[800],
    padding: 5,
    borderRadius: 30,
  },
  sellerInfo: {
    marginLeft: 10,
  },
  username: {
    fontFamily: "Montserrat-Bold",
  },
});
