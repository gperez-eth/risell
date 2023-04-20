import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { NAV_SCREENS } from "@utils/constants/Navigation";
import { RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {},
    },
  },
};

export default linking;
