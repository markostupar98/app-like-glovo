import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./AuthNav";

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <AuthNav />
    </NavigationContainer>
  );
};

export default RootNavigator;
