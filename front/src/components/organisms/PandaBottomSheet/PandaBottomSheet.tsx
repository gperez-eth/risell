import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetHandle,
  BottomSheetProps,
} from "@gorhom/bottom-sheet";
import Colors from "@utils/constants/Colors";
import useColorScheme from "hooks/useColorScheme";

export const PandaBottomSheet = React.forwardRef<BottomSheet, BottomSheetProps>(
  (props, ref) => {
    const theme = useColorScheme();

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
        handleIndicatorStyle={{
          backgroundColor:
            theme == "dark" ? Colors.light[100] : Colors.dark[900],
        }}
        backdropComponent={renderBackdrop}
        backgroundStyle={props.backgroundStyle}
      >
        {props.children}
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({});
