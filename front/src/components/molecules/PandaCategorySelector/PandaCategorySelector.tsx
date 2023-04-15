import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { Category } from "@graphql/__generated__/risell";

type PandaCategorySelectorProps = {
  category: Category;
};

export function PandaCategorySelector({
  ...props
}: PandaCategorySelectorProps) {
  return (
    <PandaView
      style={styles.container}
      darkColor={Colors.dark[800]}
      lightColor={Colors.light.categoryCard}
    >
      <PandaIcon color="#FFFFFF" icon={ICONS[props.category.icon]} size={25} />
      <Text style={styles.title}>{props.category.name}</Text>
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: "#FFFFFF",
    marginLeft: 20,
  },
});
