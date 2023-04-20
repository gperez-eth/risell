import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Colors from "@utils/constants/Colors";
import { PandaText, PandaView } from "@components/Themed";
import { Category } from "@graphql/__generated__/risell";
import { PandaPhotoUploader } from "@components/organisms";

type DefaultUploadScreenProps = {
  category: Category;
};

export function DefaultUploadScreen({ ...props }: DefaultUploadScreenProps) {
  return (
    <PandaView style={styles.containerForm} lightColor={Colors.light[100]}>
      <PandaView
        style={styles.containerHeader}
        lightColor={Colors.light[300]}
        darkColor={Colors.dark[800]}
      >
        <PandaText style={styles.sellTitle}>Sell Product</PandaText>
        <PandaText lightColor={Colors.light[1000]} style={styles.subTitle}>
          {props.category.id}
        </PandaText>
        <PandaPhotoUploader style={styles.photoUploader}></PandaPhotoUploader>
      </PandaView>
    </PandaView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sellTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
  },
  subTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    marginTop: 10,
  },
  containerForm: {
    flex: 1,
  },
  photoUploader: {
    marginTop: 20,
    paddingVertical: 35,
  },
});
