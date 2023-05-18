import { PandaPressable, PandaText } from "@components/Themed";
import { useBottomSheet } from "@gorhom/bottom-sheet";
import { productState } from "@utils/index";
import React from "react";
import { StyleSheet, View } from "react-native";

type SelectItemStatusSheetProps = {
  pickStatus: (index: number) => void;
};

export function SelectItemStatusSheet({
  ...props
}: SelectItemStatusSheetProps) {
  const { close } = useBottomSheet();

  return (
    <View style={styles.container}>
      <PandaText style={styles.titleHeader}>Select the condition</PandaText>
      {productState.map((data, index) => (
        <PandaPressable
          key={index}
          customStyle={styles.conditionContainer}
          onPress={() => {
            props.pickStatus(index + 1);
            close();
          }}
        >
          <PandaText style={styles.conditionTitle}>{data.status}</PandaText>
          <PandaText style={styles.conditionDescription}>
            {data.description}
          </PandaText>
        </PandaPressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  conditionContainer: {
    marginBottom: 15,
  },
  conditionTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  titleHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
    marginBottom: 20,
    paddingTop: 10,
  },
  conditionDescription: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
  },
});
