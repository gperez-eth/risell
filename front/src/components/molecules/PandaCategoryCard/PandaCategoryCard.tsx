import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";

type PandaCategoryCardProps = {
  itemData: { title: string; icon: string };
};

export function PandaCategoryCard({ ...props }: PandaCategoryCardProps) {
  return (
    <PandaView
      style={styles.container}
      darkColor={Colors.dark.categoryCard}
      lightColor={Colors.light.categoryCard}
      shadow
    >
      <PandaIcon color="#FFFFFF" icon={ICONS[props.itemData.icon]} size={25} />
      <Text style={styles.title}>{props.itemData.title}</Text>
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 95,
    height: 115,
    marginHorizontal: 3,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 11,
    marginTop: 10,
    color: "#FFFFFF",
  },
});
