import React from "react";
import { StyleSheet } from "react-native";
import {
  UploadScreenNavigationProp,
  UploadScreenRouteProp,
} from "router/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DefaultUploadScreen } from "@components/templates";

export function UploadScreen() {
  const navigation = useNavigation<UploadScreenNavigationProp>();
  const { params } = useRoute<UploadScreenRouteProp>();
  return <DefaultUploadScreen category={params.category} />;
}

const styles = StyleSheet.create({
  containerHeader: {},
  containerForm: {
    flex: 1,
  },
});
