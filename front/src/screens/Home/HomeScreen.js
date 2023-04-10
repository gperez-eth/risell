import { StyleSheet } from "react-native";
import { DefaultHomeScreen } from "@components/templates";
import { PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaSearchBar } from "@components/molecules";

export function HomeScreen({ navigation }) {
  return (
    <PandaView
      style={styles.container}
      lightColor={Colors.light.screenBackground}
      darkColor={Colors.dark[900]}
    >
      <DefaultHomeScreen navigation={navigation} />
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
