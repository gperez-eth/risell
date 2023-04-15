import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Colors from "@utils/constants/Colors";
import { PandaView } from "@components/Themed";
import { Category } from "@graphql/__generated__/risell";

type DefaultUploadScreenProps = {
  category: Category;
};

export function DefaultUploadScreen({ ...props }: DefaultUploadScreenProps) {
  console.log(props.category);
  return (
    <PandaView
      style={styles.containerHeader}
      lightColor={Colors.light.screenBackground}
      darkColor={Colors.dark[800]}
    >
      <PandaView
        style={styles.containerForm}
        lightColor={Colors.light.screenBackground}
        darkColor={Colors.dark[900]}
      ></PandaView>
    </PandaView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {},
  containerForm: {
    flex: 1,
  },
});
