import React, { useEffect, useState } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

type PandaFormProps = {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
};

export function PandaForm({ ...props }: PandaFormProps) {
  const [stateValue, setStateValue] = useState({});

  const handleStateValueChange = (value, key) => {
    setStateValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    console.log(stateValue);
  }, [stateValue]);

  return (
    <Animated.View
      entering={FadeInUp.duration(1000)}
      style={[styles.container, props.style]}
    >
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          handleStateValueChange,
        });
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
