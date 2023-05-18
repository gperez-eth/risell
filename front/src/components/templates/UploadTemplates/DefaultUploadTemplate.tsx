import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Colors from "@utils/constants/Colors";
import { PandaText, PandaView } from "@components/Themed";
import { Category } from "@graphql/__generated__/risell";
import { PandaBottomSheet, PandaPhotoUploader } from "@components/organisms";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { SelectPhotoSheet } from "../BottomSheetTemplates/SelectPhotoSheet";
import useColorScheme from "hooks/useColorScheme";
import * as ImagePicker from "expo-image-picker";
import { useBottomSheet } from "@gorhom/bottom-sheet";
import { PandaForm } from "@components/molecules";
import {
  PandaCheckboxForm,
  PandaCurrencyInputForm,
  PandaInputForm,
  PandaPressableInputForm,
} from "@components/atoms";
import { SelectItemStatusSheet } from "../BottomSheetTemplates/SelectItemStatus";
import { ScrollView } from "react-native-gesture-handler";

type DefaultUploadScreenProps = {
  category: Category;
};

export function DefaultUploadScreen({ ...props }: DefaultUploadScreenProps) {
  const choosePhotoSheet = useRef<BottomSheet>(null);
  const chooseItemStatus = useRef<BottomSheet>(null);

  const theme = useColorScheme();

  const [image, setImage] = useState(null);
  const [itemCondition, setItemCondition] = useState<number>(null);
  const [auctionEnabled, setAuctionEnabled] = useState<boolean>(false);
  const [buyNowEnabled, setBuyNowEnabled] = useState<boolean>(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets);
    }
  };

  return (
    <PandaView style={styles.containerForm} lightColor={Colors.light[100]}>
      <PandaView
        style={styles.containerHeader}
        lightColor={Colors.light[300]}
        darkColor={Colors.dark[800]}
      >
        <PandaText style={styles.sellTitle}>Sell Product</PandaText>
        <PandaText lightColor={Colors.light[1000]} style={styles.subTitle}>
          {props.category.id}
        </PandaText>
        <PandaPhotoUploader
          pressAction={() => choosePhotoSheet.current?.expand()}
          images={image}
          style={styles.photoUploader}
        ></PandaPhotoUploader>
      </PandaView>
      <ScrollView>
        <PandaForm style={styles.form}>
          <PandaInputForm
            placeholder="Title"
            formKey="title"
            style={{ marginBottom: 20 }}
          />
          <PandaInputForm
            placeholder="Description"
            formKey="description"
            multiline
            style={{ marginBottom: 20 }}
          />
          <PandaPressableInputForm
            placeholder="Product condition"
            value={itemCondition}
            style={{ marginBottom: 20 }}
            pressAction={() => chooseItemStatus.current?.expand()}
          />
          <PandaCheckboxForm
            style={{ marginBottom: 20 }}
            title="Enable auction"
            description="Buyers can bid for your item. You can set the starting bid price and
            when it finish. The sale finish when the bid time expire or if you
            cancel it."
            enabledDefault={buyNowEnabled}
            getValue={(value) => setAuctionEnabled(value)}
          />
          <PandaCheckboxForm
            style={{ marginBottom: 20 }}
            title="Enable Buy now"
            description="Buyers can buy the product without bidding."
            getValue={(value) => {
              setBuyNowEnabled(value);
            }}
          />
          <PandaCurrencyInputForm placeholder="Precio" />
        </PandaForm>
      </ScrollView>
      <PandaBottomSheet
        ref={choosePhotoSheet}
        snapPoints={["30%"]}
        backgroundStyle={
          theme == "dark"
            ? { backgroundColor: Colors.dark[800] }
            : { backgroundColor: Colors.light[100] }
        }
      >
        <SelectPhotoSheet pickImage={pickImage} />
      </PandaBottomSheet>
      <PandaBottomSheet
        ref={chooseItemStatus}
        snapPoints={["60%"]}
        backgroundStyle={
          theme == "dark"
            ? { backgroundColor: Colors.dark[800] }
            : { backgroundColor: Colors.light[100] }
        }
      >
        <SelectItemStatusSheet
          pickStatus={(condition) => setItemCondition(condition)}
        />
      </PandaBottomSheet>
    </PandaView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    paddingVertical: 30,
  },
  sellTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  containerForm: {
    flex: 1,
  },
  photoUploader: {
    marginTop: 20,
    paddingVertical: 35,
    marginHorizontal: 20,
  },
  form: {
    padding: 20,
    paddingBottom: 50,
  },
});
