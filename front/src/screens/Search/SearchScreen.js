import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PandaSearchBar } from "@components/molecules";
import { useEffect } from "react";

export function SearchScreen({ navigation }) {
  useEffect(() => {
    navigation
      .getParent("tabs")
      .setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent("tabs").setOptions({ tabBarStyle: {} });
    };
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <PandaSearchBar
          cancelSearchAction={() => navigation.goBack()}
          editable
          autoFocus
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#1B1A1A",
  },
  searchBarContainer: {
    paddingHorizontal: 20,
  },
});
