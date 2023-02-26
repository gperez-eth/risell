import { StyleProp, ViewStyle } from "react-native";

export type PandaButtonProps = {
  children: JSX.Element | JSX.Element[];
  color: string;
  pressAction: () => void;
  style?: StyleProp<ViewStyle>;
  shadow?: boolean;
};
