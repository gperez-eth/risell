import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StyleProp,
  TextStyle,
} from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import { PandaProductCard } from "@components/molecules";
import { GetProductsQuery } from "@graphql/__generated__/risell";
import { ProductCardProps } from "@utils/Types";
import { Dimensions } from "react-native";
import { PandaText } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";

type PandaPhotoUploaderProps = {
  style: StyleProp<TextStyle>;
};

export function PandaPhotoUploader({ ...props }: PandaPhotoUploaderProps) {
  const renderEmptyPhotoContainer = () => {
    return (
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.container,
          props.style,
        ]}
      >
        <PandaIcon
          icon={ICONS.IMAGE}
          size={40}
          color={Colors.light.productDescription}
        />
        <PandaText
          lightColor={Colors.light.productDescription}
          darkColor={Colors.light.productDescription}
          style={styles.textDescription}
        >
          Add photos
        </PandaText>
      </Pressable>
    );
  };

  return renderEmptyPhotoContainer();
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderStyle: "dotted",
    borderColor: Colors.light.productDescription,
    alignItems: "center",
    borderRadius: 10,
  },
  textDescription: {
    fontFamily: "Montserrat-Bold",
    fontSize: 17,
    marginTop: 15,
  },
});
