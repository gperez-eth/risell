import { PandaText, PandaView } from "@components/Themed";
import { PandaCategorySelector } from "@components/molecules";
import { useBottomSheet } from "@gorhom/bottom-sheet";
import { Category } from "@graphql/__generated__/risell";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import Colors from "@utils/constants/Colors";
import { ICONS } from "@utils/constants/Icons";
import { useFetchCategories } from "hooks/useCategories";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { UploadScreenNavigationProp } from "router/types";

type SelectPhotoSheetProps = {
  pickImage: () => void;
};

export function SelectPhotoSheet({ ...props }: SelectPhotoSheetProps) {
  const { close } = useBottomSheet();

  return (
    <View style={styles.container}>
      <PandaText
        darkColor={Colors.light[100]}
        lightColor={Colors.dark[900]}
        style={styles.titleSubHeader}
      >
        Add photo
      </PandaText>
      <PandaCategorySelector
        pressAction={() => {
          props.pickImage();
          close();
        }}
        category={{ icon: "MEDIA", name: "Choose from gallery" }}
      />
      <PandaCategorySelector
        pressAction={() => console.log("asdf")}
        category={{ icon: "MEDIA", name: "Take photo from camera" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleSubHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
});
