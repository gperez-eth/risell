import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { PandaAvatarProps } from "@utils/Types/PandaAvatar";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { PandaInput, PandaText, PandaView } from "@components/Themed";
import { TextInput } from "react-native-gesture-handler";
import Colors from "@utils/constants/Colors";
import useColorScheme from "hooks/useColorScheme";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import CurrencyInput from "react-native-currency-input";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { PandaInputForm } from "../PandaInputForm/PandaInputForm";

type PandaCurrencyInputFormProps = {
  style?: StyleProp<ViewStyle>;
  placeholder: string;
};

export function PandaCurrencyInputForm({
  ...props
}: PandaCurrencyInputFormProps) {
  const theme = useColorScheme();

  const [amountValue, setAmountValue] = useState<number>(null);

  const onChangeBidValue = (value) => {
    setAmountValue(value);
  };

  return (
    <View style={props.style}>
      {amountValue && (
        <Animated.View entering={FadeInDown.duration(300)}>
          <PandaText style={styles.placeholder}>{props.placeholder}</PandaText>
        </Animated.View>
      )}
      <PandaView
        darkColor={Colors.dark[800]}
        lightColor={Colors.light[300]}
        style={styles.inputContainer}
      >
        <CurrencyInput
          value={amountValue}
          onChangeValue={onChangeBidValue}
          renderTextInput={(textInputProps) => (
            <PandaInput
              darkColor={Colors.dark[800]}
              lightColor={Colors.light[300]}
              style={[
                styles.input,
                {
                  color: theme == "dark" ? Colors.dark[100] : Colors.dark[200],
                },
              ]}
              placeholder={props.placeholder}
              placeholderTextColor={
                theme == "dark" ? Colors.dark[600] : Colors.light[900]
              }
              {...textInputProps}
            />
          )}
          delimiter="."
          separator=","
          precision={2}
          placeholder={props.placeholder}
        />
        <PandaText style={styles.tag}>EUR</PandaText>
      </PandaView>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    fontFamily: "Montserrat-Bold",
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 5,
  },
  currencyIndicator: {
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    marginLeft: 300,
  },
  inputContainer: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 20,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    borderRadius: 10,
  },
  tag: {
    fontFamily: "Montserrat-Bold",
    fontSize: 17,
    marginHorizontal: 20,
  },
});
