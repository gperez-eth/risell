import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
} from "@gorhom/bottom-sheet";
import Colors from "@utils/constants/Colors";

export const PandaBottomSheet = React.forwardRef<BottomSheet, BottomSheetProps>(
  (props, ref) => {
    const renderBackdrop = useCallback(
      (props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      [],
    );

    return (
      <BottomSheet
        ref={ref}
        snapPoints={props.snapPoints}
        enablePanDownToClose={true}
        index={-1}
        backgroundStyle={{ backgroundColor: Colors.dark[800] }}
        handleIndicatorStyle={{ backgroundColor: "white" }}
        backdropComponent={renderBackdrop}
      >
        {props.children}
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
