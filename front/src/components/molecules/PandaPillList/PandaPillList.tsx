import { PandaAvatar } from "@components/atoms";
import { PandaText } from "@components/Themed";
import { FlashList } from "@shopify/flash-list";
import Colors from "@utils/constants/Colors";
import dayjs from "dayjs";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

type PandaPillListProps = {
  options: { optionText: string; isActive: boolean }[];
  onChangeMenuOption: (index: number) => void;
};

export function PandaPillList({ ...props }: PandaPillListProps) {
  function Pill(option, index) {
    return (
      <Pressable
        onPress={() => props.onChangeMenuOption(index)}
        style={[styles.pillContainer, option.isActive && styles.pillActive]}
      >
        <Text style={[styles.pillText, option.isActive && styles.pillActive]}>
          {option.optionText}
        </Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.listContainer}>
      <FlashList
        data={props.options}
        renderItem={({ item, index }) => Pill(item, index)}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={100}
        horizontal
        contentContainerStyle={styles.list}
      ></FlashList>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  list: {
    paddingLeft: 20,
  },
  pillContainer: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  pillActive: {
    backgroundColor: Colors.primary,
    color: Colors.dark[100],
  },
  pillText: {
    fontSize: 12,
    fontFamily: "Montserrat-Bold",
    color: "#AFAFAF",
  },
});
