import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VincularScreen = ({ navigation }) => {
  const [name, setName] = useState(""); // Estado para almacenar el nombre del usuario
  const [isLinking, setIsLinking] = useState(false); // Estado para simular vinculación
  const [linkingDevice, setLinkingDevice] = useState(null); // Dispositivo en proceso de vinculación

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
  const dispositivos = ["Dispositivo 6", "Dispositivo 7", "Dispositivo 8"];

  const handleVincular = (dispositivo) => {
    setIsLinking(true);
    setLinkingDevice(dispositivo);
  
    // Simular un retraso para la vinculación
    setTimeout(() => {
      setIsLinking(false);
      setLinkingDevice(null);
  
      // Navegar de regreso a DispositivosScreen con el nuevo dispositivo
      navigation.navigate("Dispositivos", {
        nuevoDispositivo: { id: Date.now().toString(), nombre: dispositivo, estado: "Apagado" },
      });
    }, 2000); // Simulación de 2 segundos
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header reutilizable */}
      <Header title={`Hola ${name || "Usuario"}!`} onBackPress={() => navigation.goBack()} />

      <Text style={styles.title}>Buscando dispositivo</Text>

      {/* Mostrar indicador de vinculación si está en proceso */}
      {isLinking && (
        <View style={styles.linkingContainer}>
          <ActivityIndicator size="large" color="#6A1B9A" />
          <Text style={styles.linkingText}>Vinculando {linkingDevice}...</Text>
        </View>
      )}

      {/* Lista de dispositivos */}
      {!isLinking &&
        dispositivos.map((dispositivo, index) => (
          <TouchableOpacity
            key={index}
            style={styles.deviceButton}
            onPress={() => handleVincular(dispositivo)}
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
    margin: 15,
  },
  deviceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  linkingContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  linkingText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default VincularScreen;