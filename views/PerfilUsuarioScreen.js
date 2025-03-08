import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

const PerfilUsuarioScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState("Ricardo");
    const [correo, setCorreo] = useState("ricardo4@gmail.com");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <Header title="Hola Ricardo!" onBackPress={() => navigation.goBack()} />

            <View style={styles.content}>
                {/* Tarjeta de usuario */}
                <View style={styles.profileCard}>
                    <Ionicons name="person-circle-outline" size={50} color="white" />
                    <Text style={styles.email}>{correo}</Text>
                </View>

                {/* Formulario de perfil */}
                <Text style={styles.label}>Nombre</Text>
                <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput style={styles.input} value={correo} onChangeText={setCorreo} keyboardType="email-address" />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Actualizar contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Text style={styles.label}>Confirmar contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirma nueva contraseña"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                {/* Botones */}
                <TouchableOpacity style={styles.updateButton}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F5F5F5" },
    content: {
        flex: 1,        
        alignItems: "center",
        paddingHorizontal: 20,
    },
    profileCard: {
        backgroundColor: "#D8A3E6",
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        marginVertical: 20,
        width: "100%",
    },
    email: { color: "#000", fontSize: 16, fontWeight: "bold", marginLeft: 10 },
    label: { fontSize: 14, fontWeight: "bold", marginTop: 10, alignSelf: "flex-start" },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
        width: "100%",
    },
    updateButton: { backgroundColor: "#4A148C", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10, width: "100%" },
    logoutButton: { backgroundColor: "#D32F2F", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10, width: "100%" },
    buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default PerfilUsuarioScreen;