import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../utils/constants";
import Home from "../components/Home";
import { RootStackParamList } from "./RootNavigator.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ["ebook://", "https://ebook.com", "https://*.ebook.com"],
};

export default function RootNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <>
          <Stack.Screen name={Routes.HOME} component={Home} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
