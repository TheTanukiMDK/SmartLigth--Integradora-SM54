import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

const ControlScreen = ({ route, navigation }) => {
  const { nombre, estadoInicial } = route.params;
  const [estado, setEstado] = useState(estadoInicial);

  const toggleEstado = () => {
    setEstado(estado === "Encendido" ? "Apagado" : "Encendido");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="Hola Ricardo!" onBackPress={() => navigation.goBack()} />

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
      <TouchableOpacity style={styles.horaButton}>
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
