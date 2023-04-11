import { PandaErrorToast } from "@components/Themed";
import { PandaBaseToast } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import React from "react";
import { Text, View } from "react-native";
import { BaseToast, ErrorToast } from "react-native-toast-message";

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <PandaBaseToast
      {...props}
      style={{ borderLeftColor: Colors.success }}
      darkColor={Colors.dark[100]}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 13,
        fontFamily: "Montserrat-SemiBold",
      }}
      text2Style={{
        fontSize: 10,
        fontFamily: "Montserrat-Medium",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <PandaErrorToast
      {...props}
      darkColor={Colors.dark[100]}
      style={{ borderLeftColor: Colors.error }}
      text1Style={{
        fontSize: 13,
        fontFamily: "Montserrat-SemiBold",
      }}
      text2Style={{
        fontSize: 10,
        fontFamily: "Montserrat-Medium",
      }}
    />
  ),
};
