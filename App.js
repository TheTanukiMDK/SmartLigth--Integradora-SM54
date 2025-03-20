import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AreasScreen from "./src/screens/AreasScreen";
import DispositivosScreen from "./src/screens/DispositivosScreen";
import VincularScreen from "./src/screens/VincularScreen";
import ControlScreen from "./src/screens/ControlScreen";
import EstablecerHoraScreen from "./src/screens/EstablecerHoraScreen";
import PerfilUsuarioScreen from "./src/screens/PerfilUsuarioScreen";

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
        <Stack.Screen name="EstablecerHora" component={EstablecerHoraScreen} />
        <Stack.Screen name="Perfil" component={PerfilUsuarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
