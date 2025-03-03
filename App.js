import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import AreasScreen from "./views/AreasScreen";
import DispositivosScreen from "./views/DispositivosScreen";
import VincularScreen from "./views/VincularScreen";
import ControlScreen from "./views/ControlScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Areas" component={AreasScreen} />
        <Stack.Screen name="Dispositivos" component={DispositivosScreen} />
        <Stack.Screen name="Vincular" component={VincularScreen} />
        <Stack.Screen name="Control" component={ControlScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
