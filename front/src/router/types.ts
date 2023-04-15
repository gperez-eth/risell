import { Category } from "@graphql/__generated__/risell";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Sell: undefined;
  Hub: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Root: BottomTabNavigatorParamList;
  Search: undefined;
  Product: undefined;
  Upload: {
    category: Category;
  };
};

// UPLOAD SCREEN TYPES
export type UploadScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, "Upload">,
  BottomTabNavigationProp<BottomTabNavigatorParamList>
>;

export type UploadScreenRouteProp = RouteProp<RootStackParamList, "Upload">;
