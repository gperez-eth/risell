import { StyleSheet } from "react-native";
import { DefaultHomeScreen } from "@components/templates";
import { PandaSafeView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { risellClient } from "@graphql/index";

export function HomeScreen({ navigation }) {
  console.log(risellClient.getProducts())
  return (
    <PandaSafeView
      style={styles.container}
      lightColor={Colors.light.screenBackground}
      darkColor={Colors.dark.screenBackground}
    >
      <DefaultHomeScreen navigation={navigation} />
    </PandaSafeView>
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
