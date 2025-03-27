import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EstablecerHoraScreen = ({ navigation }) => {
  const [horaEncendido, setHoraEncendido] = useState("00:00:00");
  const [horaApagado, setHoraApagado] = useState("00:00:00");
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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title={`Hola ${name || 'Usuario'}!`} onBackPress={() => navigation.goBack()} />

      {/* Título */}
      <Text style={styles.title}>Establecer hora</Text>

      {/* Campos de hora */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Encendido</Text>
        <TextInput
          style={styles.input}
          value={horaEncendido}
          onChangeText={setHoraEncendido}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apagado</Text>
        <TextInput
          style={styles.input}
          value={horaApagado}
          onChangeText={setHoraApagado}
          keyboardType="numeric"
        />
      </View>

      {/* Botón Aplicar */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Aplicar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F5F5F5", 
    alignItems: "center"
  },
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginVertical: 15 
  },
  inputContainer: { 
    marginBottom: 20, 
    width: "80%" 
  },
  label: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginBottom: 5 
  },
  input: { 
    backgroundColor: "#fff", 
    padding: 10, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: "#ccc" 
  },
  button: { 
    backgroundColor: "#9C27B0", 
    padding: 15, 
    borderRadius: 10, 
    alignItems: "center", 
    marginTop: 20, 
    width: "40%" 
  },
  buttonText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});

export default EstablecerHoraScreen;