import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { NAV_SCREENS } from "@utils/constants/Navigation";
import { HomeScreen } from "@screens";
import { PandaTabBar } from "@components/molecules";

import LinkingConfiguration from "./LinkingConfiguration";
import { ProductScreen, SearchScreen } from "@screens/index";

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

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      id="tabs"
      initialRouteName={NAV_SCREENS.HOME}
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      tabBar={(props) => <PandaTabBar {...props} />}
    >
      <BottomTab.Screen
        name={NAV_SCREENS.HOME}
        options={{ tabBarLabel: "Home" }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name={NAV_SCREENS.SELL}
        options={{
          tabBarLabel: "Sell",
        }}
        component={SearchScreen}
      />
      <BottomTab.Screen
        name={NAV_SCREENS.HUB}
        options={{ tabBarLabel: "Hub" }}
        component={SearchScreen}
      />
      <BottomTab.Screen
        name={NAV_SCREENS.PROFILE}
        options={{ tabBarLabel: "Profile" }}
        component={SearchScreen}
      />
    </BottomTab.Navigator>
  );
}
