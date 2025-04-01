import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Modal, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AreasScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [areaName, setAreaName] = useState("");
  const [name, setName] = useState(""); // Estado para almacenar el nombre del usuario
  const [dynamicAreas, setDynamicAreas] = useState([]); // Estado para áreas dinámicas

  const handleAddArea = () => {
    if (areaName.trim() !== "") {
      setDynamicAreas([...dynamicAreas, areaName]); // Agrega el área al estado dinámico
      setModalVisible(false);
      setAreaName("");
    } else {
      console.warn("El nombre del área no puede estar vacío.");
    }
  };
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
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <Text style={styles.greeting} >{`Hola ${name || 'Usuario'}!`}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-circle-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{ uri: "https://laopinion.com/wp-content/uploads/sites/3/2020/08/pexels-vecislavas-popa-1743231.jpg?resize=1316,740&quality=80" }}
        style={styles.image}
      />
      <View style={styles.areasContainer}>
        <Text style={styles.areasTitle}>Áreas</Text>
        <View style={styles.areasRow}>
        <TouchableOpacity
  style={styles.areaCard}
  onPress={() => navigation.navigate("Dispositivos", { areaName: "Cocina" })}
>
  <Ionicons name="bulb-outline" size={40} color="white" />
  <Text style={styles.areaText}>Cocina</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.areaCard}
  onPress={() => navigation.navigate("Dispositivos", { areaName: "Dormitorio" })}
>
  <Ionicons name="bulb-outline" size={40} color="white" />
  <Text style={styles.areaText}>Dormitorio</Text>
</TouchableOpacity>

{/* Áreas dinámicas */}
{dynamicAreas.map((area, index) => (
  <TouchableOpacity
    key={index}
    style={styles.areaCard}
    onPress={() => navigation.navigate("Dispositivos", { areaName: area })}
  >
    <Ionicons name="bulb-outline" size={40} color="white" />
    <Text style={styles.areaText}>{area}</Text>
  </TouchableOpacity>
))}
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addCard}>
            <Ionicons name="add-outline" size={40} color="#6A1B9A" />
          </TouchableOpacity>

        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Agregar Área</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del área"
              value={areaName}
              onChangeText={setAreaName}
            />
            <Button title="Agregar" onPress={handleAddArea} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#F5F5F5" },
  header: { flexDirection: "row", backgroundColor: "#6A1B9A", padding: 15, alignItems: "center", justifyContent: "space-between" },
  greeting: { color: "white", fontSize: 18, fontWeight: "bold" },
  image: { width: "100%", height: 200 },
  areasContainer: { padding: 20 },
  areasTitle: { fontSize: 18, fontWeight: "bold" },
  areasRow: {
    flexDirection: "row",
    flexWrap: "wrap", // Permite que los elementos se envuelvan a la siguiente fila
    marginTop: 10,
    gap: 10, // Espaciado entre los elementos
  },
  areaCard: {
    backgroundColor: "#6A1B9A",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    flexBasis: "30%", // Cada tarjeta ocupa aproximadamente un tercio del ancho
    marginBottom: 10, // Espaciado vertical entre filas
  },
  areaText: { color: "white", marginTop: 5 },
  addCard: {
    borderWidth: 2,
    borderColor: "#6A1B9A",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    flexBasis: "30%", // Misma proporción que las tarjetas de área
    borderStyle: "dashed",
    marginBottom: 10, // Espaciado vertical entre filas
  },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalView: { width: 300, padding: 20, backgroundColor: "white", borderRadius: 10, alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: { width: "100%", padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10 },
  
});

export default AreasScreen;