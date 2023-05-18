import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { PandaText, PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { Category } from "@graphql/__generated__/risell";
import useColorScheme from "hooks/useColorScheme";

type PandaCategorySelectorProps = {
  category: Category | { icon: string; name: string };
  pressAction: () => void;
};

export function PandaCategorySelector({
  ...props
}: PandaCategorySelectorProps) {
  const theme = useColorScheme();

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.pressableContainer,
      ]}
      onPress={props.pressAction}
    >
      <PandaView
        style={styles.dataContainer}
        lightColor={Colors.light[600]}
        darkColor={Colors.dark[700]}
      >
        <PandaView
          style={styles.iconContainer}
          lightColor={Colors.light[700]}
          darkColor={Colors.dark[400]}
        >
          <PandaIcon
            color={theme == "dark" ? Colors.light[100] : Colors.dark[500]}
            icon={ICONS[props.category.icon]}
            size={22}
          />
        </PandaView>
        <PandaText
          darkColor={Colors.light[100]}
          lightColor={Colors.dark[500]}
          style={styles.title}
        >
          {props.category.name}
        </PandaText>
      </PandaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    marginBottom: 10,
    borderRadius: 20,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    marginLeft: 15,
  },
});
