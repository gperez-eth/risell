import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { PandaAvatarProps } from "@utils/Types/PandaAvatar";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { PandaInput, PandaText } from "@components/Themed";
import { TextInput } from "react-native-gesture-handler";
import Colors from "@utils/constants/Colors";
import useColorScheme from "hooks/useColorScheme";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

type PandaInputFormProps = {
  placeholder: string;
  multiline?: boolean;
  style?: StyleProp<ViewStyle>;
  formKey: string;
  handleStateValueChange?: (value: any, key: string) => void;
};

export function PandaInputForm({ ...props }: PandaInputFormProps) {
  const theme = useColorScheme();

  const [value, setValue] = useState<string>("");

  const MAX_CHAR_LENGHT = 500;

  return (
    <View style={props.style}>
      {value && (
        <Animated.View entering={FadeInDown.duration(300)}>
          <PandaText style={styles.placeholder}>{props.placeholder}</PandaText>
        </Animated.View>
      )}
      <PandaInput
        onChangeText={(text) =>
          props.handleStateValueChange(text, props.formKey)
        }
        darkColor={Colors.dark[800]}
        lightColor={Colors.light[300]}
        multiline={props.multiline}
        style={[
          styles.input,
          { color: theme == "dark" ? Colors.dark[100] : Colors.dark[200] },
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={
          theme == "dark" ? Colors.dark[600] : Colors.light[900]
        }
        maxLength={MAX_CHAR_LENGHT}
      ></PandaInput>
      {props.multiline && (
        <PandaText style={styles.charIndicator}>
          {value.length} / {MAX_CHAR_LENGHT}
        </PandaText>
      )}
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
  input: {
    padding: 20,
    paddingTop: 20,
    borderRadius: 10,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  charIndicator: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    textAlign: "right",
    marginTop: 10,
    marginRight: 10,
  },
});
