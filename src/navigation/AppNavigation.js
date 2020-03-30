import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PhotoScreen } from "../screens/PhotoScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen
          name="Photo"
          component={PhotoScreen}
          options={({ route }) => ({ title: route.params.headerTitle })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
