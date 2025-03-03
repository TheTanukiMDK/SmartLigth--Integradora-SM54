import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const VincularScreen = ({ navigation }) => {
  // Simulación de dispositivos detectados
  const dispositivos = ["Dispositivo 1", "Dispositivo 2", "Dispositivo 3"];

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header reutilizable */}
      <Header title="Hola Ricardo!" onBackPress={() => navigation.goBack()} />

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
