import { PandaText, PandaView } from "@components/Themed";
import { PandaCategorySelector } from "@components/molecules";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import Colors from "@utils/constants/Colors";
import { useFetchCategories } from "hooks/useCategories";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type SelectCategorySheetProps = {};

export function SelectCategorySheet({ ...props }: SelectCategorySheetProps) {
  const navigation = useNavigation<any>();
  const { data: categories, isLoading, isSuccess } = useFetchCategories();

  const renderCategorySelector = ({ item }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Upload", { category: item })}
      >
        <PandaCategorySelector category={item} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <PandaText style={styles.titleHeader}>Select a category</PandaText>
      <PandaView style={styles.containerSubHeader} darkColor={Colors.primary}>
        <PandaText style={styles.titleSubHeader}>Live Shopping</PandaText>
      </PandaView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <PandaCategorySelector
          category={{ id: "live", icon: "LIVE", name: "Start a streaming" }}
        />
      </View>
      <PandaView style={styles.containerSubHeader} darkColor={Colors.primary}>
        <PandaText style={styles.titleSubHeader}>Single product</PandaText>
      </PandaView>
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
  },
  titleHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    marginBottom: 15,
    paddingTop: 10,
    color: "#FFFFFF",
    paddingHorizontal: 20,
  },
  containerSubHeader: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  titleSubHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 13,
    color: "#FFFFFF",
  },
  contentList: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
