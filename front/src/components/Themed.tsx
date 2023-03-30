import {
  Text as DefaultText,
  View as DefaultView,
  Pressable as DefaultPressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaView as DefaultAreaView } from "react-native-safe-area-context";

import Colors from "@utils/constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { generateBoxShadowStyle } from "@utils/index";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  shadow?: boolean;
  customStyle?: StyleProp<ViewStyle>;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type SafeAreaProps = ThemeProps & DefaultView["props"];
export type PandaPressableProps = ThemeProps & PressableProps;

export function PandaText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function PandaView(props: ViewProps) {
  const { style, lightColor, darkColor, shadow, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  const shadowStyle =
    shadow && generateBoxShadowStyle(0, 0, "#171717", 0.3, 3, 5, "#171717");

  return (
    <DefaultView
      style={[{ backgroundColor }, shadowStyle, style]}
      {...otherProps}
    />
  );
}

export function PandaSafeView(props: SafeAreaProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <DefaultAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function PandaPressable(props: PandaPressableProps) {
  const { customStyle, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <DefaultPressable
      style={[{ backgroundColor }, customStyle]}
      {...otherProps}
    />
  );
}
