import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VincularScreen = ({ navigation }) => {
  const [name, setName] = useState(""); // Estado para almacenar el nombre del usuario


  // Cargar el nombre del usuario desde AsyncStorage
  useEffect(() => {
   const cargarNombreUsuario = async () => {
     try {
       const userData = await AsyncStorage.getItem("user"); // Recupera el objeto completo
       if (userData) {
         const user = JSON.parse(userData); // Convierte el JSON a un objeto
         setName(user.name); // Extrae y establece el nombre
       } else {
         console.warn("No se encontraron datos de usuario en AsyncStorage.");
       }
     } catch (error) {
       console.error("Error al cargar el nombre del usuario:", error);
     }
   };

   cargarNombreUsuario();
 }, []);
  // Simulación de dispositivos detectados
  const dispositivos = ["Dispositivo 1", "Dispositivo 2", "Dispositivo 3"];

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header reutilizable */}
      <Header title={`Hola ${name || 'Usuario'}!`} onBackPress={() => navigation.goBack()} />

      <Text style={styles.title}>Buscando dispositivo</Text>

      {/* Lista de dispositivos */}
      {dispositivos.map((dispositivo, index) => (
        <TouchableOpacity
          key={index}
          style={styles.deviceButton}
          onPress={() => console.log(`Vinculando ${dispositivo}`)}
        >
          <Text style={styles.deviceText}>{dispositivo}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeContainer: { flex: 1, backgroundColor: "#F5F5F5" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  deviceButton: {
    backgroundColor: "#DEBAF6",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    margin: 15
  },
  deviceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VincularScreen;
