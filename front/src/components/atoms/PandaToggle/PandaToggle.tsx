import { PandaPressable, PandaText, PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import React from "react";
import { StyleSheet, StyleProp, ViewStyle, View } from "react-native";

type PandaToggleProps = {
  options: { optionText: string; isActive: boolean }[];
  onChangeMenuOption: (index: number) => void;
  style?: StyleProp<ViewStyle>;
};

export function PandaToggle({ ...props }: PandaToggleProps) {
  return (
    <PandaView darkColor={Colors.dark[800]} style={styles.container}>
      {props.options.map((option, index) => {
        return (
          <PandaPressable
            key={option.optionText}
            darkColor={option.isActive ? Colors.dark[900] : Colors.dark[800]}
            customStyle={[styles.button]}
            onPress={() => props.onChangeMenuOption(index)}
          >
            <PandaText
              darkColor={option.isActive ? Colors.dark[100] : Colors.dark[400]}
              style={styles.optionText}
            >
              {option.optionText}
            </PandaText>
          </PandaPressable>
        );
      })}
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: "center",
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
});
