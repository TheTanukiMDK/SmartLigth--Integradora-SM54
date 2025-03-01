import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const dispositivos = [
  { id: "1", nombre: "Dispositivo 1", estado: "Encendido" },
  { id: "2", nombre: "Dispositivo 2", estado: "Encendido" },
  { id: "3", nombre: "Dispositivo 3", estado: "Apagado" },
  { id: "4", nombre: "Dispositivo 4", estado: "Apagado" },
  { id: "5", nombre: "Dispositivo 5", estado: "Apagado" },
];

const DispositivosScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.greeting}>Hola Ricardo!</Text>
        <Ionicons name="person-circle-outline" size={40} color="white" />
      </View>

      {/* Título */}
      <Text style={styles.title}>Todos los dispositivos</Text>

      {/* Lista de dispositivos */}
      <FlatList
        data={dispositivos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name="bulb-outline" size={40} color="black" />
            <View style={styles.info}>
              <Text style={styles.deviceName}>{item.nombre}</Text>
              <Text style={[styles.estado, item.estado === "Encendido" ? styles.encendido : styles.apagado]}>
                {item.estado}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#F5F5F5" },
  header: { flexDirection: "row", backgroundColor: "#6A1B9A", padding: 15, alignItems: "center", justifyContent: "space-between" },
  greeting: { color: "white", fontSize: 18, fontWeight: "bold" },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 15 },
  card: { flexDirection: "row", backgroundColor: "#F8C8FF", padding: 15, borderRadius: 10, marginHorizontal: 20, marginBottom: 10, alignItems: "center" },
  info: { marginLeft: 10 },
  deviceName: { fontSize: 16, fontWeight: "bold" },
  estado: { fontSize: 14, fontWeight: "bold" },
  encendido: { color: "green" },
  apagado: { color: "red" },
});

export default DispositivosScreen;
