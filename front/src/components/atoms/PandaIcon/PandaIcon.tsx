import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type PandaIconProps = {
  icon: IconProp;
  color?: string;
  size?: number;
  width?: number;
  height?: number;
  style?: FontAwesomeIconStyle | FontAwesomeIconStyle[];
};

export function PandaIcon({ ...props }: PandaIconProps) {
  return <FontAwesomeIcon {...props} />;
}
