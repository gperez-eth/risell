import React, { useEffect, useState } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { PandaPressable, PandaText, PandaView } from "@components/Themed";
import Colors from "@utils/constants/Colors";
import { PandaIcon } from "../PandaIcon/PandaIcon";
import { ICONS } from "@utils/constants/Icons";

type PandaCheckboxFormProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  description: string;
  enabledDefault?: boolean;
  getValue: (value: boolean) => void;
};

export function PandaCheckboxForm({ ...props }: PandaCheckboxFormProps) {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    props.getValue(enabled);
  }, [enabled]);

  const onPressCheckbox = () => {
    setEnabled(!enabled);
  };

  return (
    <PandaPressable
      style={[props.style, styles.container]}
      onPress={() => onPressCheckbox()}
    >
      <PandaView
        style={[
          styles.checkContainer,
          (enabled || props.enabledDefault) && styles.checkActived,
        ]}
        darkColor=""
        lightColor={Colors.dark[500]}
      >
        {(enabled || props.enabledDefault) && (
          <PandaIcon icon={ICONS.CHECK} color={Colors.light[100]} size={20} />
        )}
      </PandaView>
      <View style={styles.checkboxTextContainer}>
        <PandaText style={styles.title}>{props.title}</PandaText>
        <PandaText style={styles.description} lightColor={Colors.dark[500]}>
          {props.description}
        </PandaText>
      </View>
    </PandaPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  checkContainer: {
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    height: 30,
    width: 30,
  },
  checkboxTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontFamily: "Montserrat-Medium",
    fontSize: 11,
  },
  checkActived: {
    backgroundColor: Colors.success,
  },
});
