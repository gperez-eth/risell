import { PandaText, PandaView } from "@components/Themed";
import { PandaCategorySelector } from "@components/molecules";
import { useBottomSheet } from "@gorhom/bottom-sheet";
import { Category } from "@graphql/__generated__/risell";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import Colors from "@utils/constants/Colors";
import { useFetchCategories } from "hooks/useCategories";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { UploadScreenNavigationProp } from "router/types";

type SelectCategorySheetProps = {};

export function SelectCategorySheet({ ...props }: SelectCategorySheetProps) {
  const { close } = useBottomSheet();
  const navigation = useNavigation<UploadScreenNavigationProp>();
  const { data: categories, isLoading, isSuccess } = useFetchCategories();

  const liveShoppingCategory = {
    id: "live",
    icon: "LIVE",
    name: "Start a streaming",
  };

  const onPressCategory = (item: Category) => {
    navigation.navigate("Upload", { category: item });
    close();
  };

  const renderCategorySelector = ({ item }) => {
    return (
      <PandaCategorySelector
        category={item}
        pressAction={() => onPressCategory(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <PandaText style={styles.titleHeader}>Select a category</PandaText>
      <PandaText
        darkColor={Colors.light[100]}
        lightColor={Colors.dark[900]}
        style={styles.titleSubHeader}
      >
        Live
      </PandaText>
      <View style={{ marginBottom: 20 }}>
        <PandaCategorySelector
          pressAction={() =>
            navigation.navigate("Upload", { category: liveShoppingCategory })
          }
          category={liveShoppingCategory}
        />
      </View>
      <PandaText
        darkColor={Colors.light[100]}
        lightColor={Colors.dark[900]}
        style={styles.titleSubHeader}
      >
        Single product
      </PandaText>
      <View style={{ height: 400 }}>
        <FlashList
          data={categories}
          renderItem={renderCategorySelector}
          contentContainerStyle={styles.contentList}
          estimatedItemSize={60}
        ></FlashList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
    marginBottom: 25,
    paddingTop: 10,
    marginLeft: 10,
  },
  titleSubHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  contentList: {
    paddingBottom: 120,
  },
});
