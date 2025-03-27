import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ControlScreen = ({ route, navigation }) => {
  const { nombre, estadoInicial } = route.params;
  const [estado, setEstado] = useState(estadoInicial);
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

  const toggleEstado = () => {
    setEstado(estado === "Encendido" ? "Apagado" : "Encendido");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title={`Hola ${name || 'Usuario'}!`} onBackPress={() => navigation.goBack()} />

      {/* Título */}
      <Text style={styles.title}>{nombre}</Text>
      {/* Botón de encendido/apagado */}
      <TouchableOpacity onPress={toggleEstado} style={styles.powerButton}>
        <Ionicons name="power" size={300} color="black" />
      </TouchableOpacity>

      {/* Estado del dispositivo */}
      <Text style={[styles.estado, estado === "Encendido" ? styles.encendido : styles.apagado]}>
        {estado}
      </Text>

      {/* Botón para establecer hora */}
      <TouchableOpacity style={styles.horaButton}  onPress={() => navigation.navigate("EstablecerHora")}>
        <Text style={styles.horaText}>Establecer Hora</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  powerButton: { marginVertical: 20, },
  estado: { fontSize: 16, fontWeight: "bold", marginBottom: 20 },
  encendido: { color: "green" },
  apagado: { color: "red" },
  horaButton: { backgroundColor: "#D83EFF", padding: 15, borderRadius: 10, marginTop: 20 },
  horaText: { fontSize: 16, color: "white", },
});

export default ControlScreen;
