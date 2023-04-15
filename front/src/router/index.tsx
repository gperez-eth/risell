import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import {
  HomeScreen,
  ProductScreen,
  SearchScreen,
  SellScreen,
  UploadScreen,
} from "@screens/index";
import { PandaTabBar } from "@components/molecules";

import { BottomTabNavigatorParamList, RootStackParamList } from "./types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "containedModal",
          animation: "fade_from_bottom",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ presentation: "formSheet", headerShown: false }}
      >
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      id="tabs"
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      tabBar={(props) => <PandaTabBar {...props} />}
    >
      <BottomTab.Screen
        name="Home"
        options={{ tabBarLabel: "Home" }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Sell"
        options={{
          tabBarLabel: "Sell",
        }}
        component={SellScreen}
      />
      <BottomTab.Screen
        name="Hub"
        options={{ tabBarLabel: "Hub" }}
        component={SearchScreen}
      />
      <BottomTab.Screen
        name="Profile"
        options={{ tabBarLabel: "Profile" }}
        component={SearchScreen}
      />
    </BottomTab.Navigator>
  );
}
