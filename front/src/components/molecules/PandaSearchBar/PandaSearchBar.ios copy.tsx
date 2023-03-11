import React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { PandaIcon } from "@components/atoms";
import { ICONS } from "@utils/constants/Icons";
import { PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";

type PandaSearchBarProps = {
  cancelSearchAction?: any;
  editable?: boolean;
  autoFocus?: boolean;
};

export function PandaSearchBar({ ...props }: PandaSearchBarProps) {
  return (
    <View style={styles.container}>
      <PandaView
        style={[styles.searchBarContainer, styles.shadowProp]}
        darkColor={Colors.dark.background}
        lightColor={Colors.light.background}
      >
        <PandaIcon color="#ECF3FF" icon={ICONS.SEARCH_BAR} size={18} />
        {props.autoFocus ? (
          <TextInput
            style={styles.input}
            numberOfLines={1}
            placeholder="Search something..."
            placeholderTextColor={"#7D7D7D"}
            autoFocus={props.autoFocus}
          ></TextInput>
        ) : (
          <Text style={[styles.input, styles.placeholderTextColor]}>
            Search something...
          </Text>
        )}
        {!props.autoFocus && (
          <View>
            <PandaIcon color="#ECF3FF" icon={ICONS.SEARCH_FILTER} size={18} />
          </View>
        )}
      </PandaView>
      {props.autoFocus && (
        <Pressable
          style={styles.cancelButton}
          onPress={props.cancelSearchAction}
        >
          <Text style={styles.cancelText}>Cancelar</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 17,
    paddingVertical: 20,
    paddingHorizontal: 17,
    alignItems: "center",
    borderRadius: 15,
  },
  cancelButton: {
    marginLeft: 10,
  },
  cancelText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    color: "#ECF3FF",
  },
  input: {
    flex: 1,
    marginLeft: 20,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: "#ECF3FF",
  },
  placeholderTextColor: {
    color: "#7D7D7D",
  },
});
