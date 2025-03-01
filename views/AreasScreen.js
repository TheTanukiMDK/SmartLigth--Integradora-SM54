import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const AreasScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hola Ricardo!</Text>
        <Ionicons name="person-circle-outline" size={40} color="white" />
      </View>
      <ImageBackground
        source={{ uri: "https://laopinion.com/wp-content/uploads/sites/3/2020/08/pexels-vecislavas-popa-1743231.jpg?resize=1316,740&quality=80" }}
        style={styles.image}
      />
      <View style={styles.areasContainer}>
        <Text style={styles.areasTitle}>Áreas</Text>
        <View style={styles.areasRow}>
          <TouchableOpacity style={styles.areaCard} onPress={() => navigation.navigate("Dispositivos")}>
            <Ionicons name="bulb-outline" size={40} color="white" />
            <Text style={styles.areaText}>Cocina</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areaCard} >
            <Ionicons name="bulb-outline" size={40} color="white" />
            <Text style={styles.areaText}>Dormitorio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addCard}>
            <Ionicons name="add-outline" size={40} color="#6A1B9A" />
          </TouchableOpacity>
        </View>
      </View>
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
  areasRow: { flexDirection: "row", marginTop: 10, gap: 10 },
  areaCard: { backgroundColor: "#6A1B9A", padding: 20, borderRadius: 10, alignItems: "center", flex: 1 },
  areaText: { color: "white", marginTop: 5 },
  addCard: { borderWidth: 2, borderColor: "#6A1B9A", padding: 20, borderRadius: 10, alignItems: "center", flex: 1, borderStyle: "dashed" },
});

export default AreasScreen;
