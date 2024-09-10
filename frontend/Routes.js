import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUpScreen from "./screens/SignUpScreen";
import UsersScreen from "./screens/UsersScreen";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SignUpScreen" component={SignUpScreen} />
        <Tab.Screen name="UsersScreen" component={UsersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
