import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaButton } from "@components/atoms/PandaButton/PandaButton";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { PandaBottomSheet } from "@components/organisms";
import { SelectCategorySheet } from "@components/templates/BottomSheetTemplates/SelectCategorySheet";

export function SellScreen({ navigation, ...props }) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <PandaView
      style={styles.container}
      lightColor={Colors.light.screenBackground}
      darkColor={Colors.dark[900]}
    >
      <PandaButton
        style={styles.addProductButton}
        color={Colors.defaultButton}
        pressAction={() => bottomSheetRef.current.snapToIndex(0)}
      >
        <PandaIcon
          icon={ICONS.ADD_PRODUCT_SCREEN}
          size={25}
          color={Colors.dark[100]}
        />
      </PandaButton>
      <PandaBottomSheet ref={bottomSheetRef} snapPoints={["75%"]}>
        <SelectCategorySheet />
      </PandaBottomSheet>
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addProductButton: {
    alignSelf: "flex-end",
    marginTop: "auto",
    bottom: 150,
    right: 20,
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
