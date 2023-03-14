import React from "react";
import { StyleSheet } from "react-native";
import { PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { DefaultProductScreen } from "@components/templates/DefaultProductScreen/DefaultProductScreen";

export function ProductScreen({ navigation, ...props }) {
  const { id } = props.route.params
  return (
    <PandaView
      style={styles.container}
      lightColor={Colors.light.screenBackground}
      darkColor={Colors.dark.screenBackground}
    >
      <DefaultProductScreen
        productId={id}
        navigation={navigation}
      />
    </PandaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
