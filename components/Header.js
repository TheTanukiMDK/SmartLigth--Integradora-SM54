import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de tener @expo/vector-icons instalado

const Header = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      {/* Botón de retroceso */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>{title}</Text>

      {/* Espacio para equilibrar diseño */}
       <Ionicons name="person-circle-outline" size={40} color="white" />
      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6A1B9A",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  spacer: {
    width: 24, // Para que el diseño sea simétrico con el botón de retroceso
  },
});

export default Header;
