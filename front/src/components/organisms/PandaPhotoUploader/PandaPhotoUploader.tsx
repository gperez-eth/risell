import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StyleProp,
  TextStyle,
} from "react-native";
import { PandaText } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { FlashList } from "@shopify/flash-list";
import { PandaPhotoThumbnail } from "@components/molecules/PandaPhotoThumbnail/PandaPhotoThumbnail";
import { ImagePickerAsset } from "expo-image-picker";

type PandaPhotoUploaderProps = {
  pressAction: () => void;
  style: StyleProp<TextStyle>;
  images: ImagePickerAsset[];
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
        onPress={props.pressAction}
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

  const separatorItem = () => {
    return <View style={{ marginLeft: 10, width: 10 }}></View>;
  };

  const renderImageList = () => {
    return (
      <View style={[{ height: 100, width: "100%", marginTop: 20 }]}>
        <FlashList
          data={props.images}
          renderItem={({ item }) => <PandaPhotoThumbnail uri={item.uri} />}
          estimatedItemSize={100}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          ItemSeparatorComponent={separatorItem}
        />
      </View>
    );
  };

  return props.images ? renderImageList() : renderEmptyPhotoContainer();
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
