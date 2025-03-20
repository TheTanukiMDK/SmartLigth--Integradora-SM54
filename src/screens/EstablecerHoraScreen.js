import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const EstablecerHoraScreen = ({ navigation }) => {
  const [horaEncendido, setHoraEncendido] = useState("00:00:00");
  const [horaApagado, setHoraApagado] = useState("00:00:00");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="Hola Ricardo!" onBackPress={() => navigation.goBack()} />

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