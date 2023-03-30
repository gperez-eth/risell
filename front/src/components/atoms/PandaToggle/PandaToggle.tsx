import { PandaPressable, PandaText } from "@components/Themed";
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
    <View style={styles.container}>
      {props.options.map((option, index) => {
        return (
          <PandaPressable
            key={option.optionText}
            darkColor={option.isActive ? Colors.dark[900] : Colors.dark[700]}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: Colors.dark[700],
  },
  button: {
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
});
