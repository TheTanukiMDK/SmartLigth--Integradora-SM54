import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={["#9b59b6", "#512DA8"]} style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="home" size={100} color="white" />
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Inicio de sesión</Text>
                <TextInput style={styles.input} placeholder="Correo Electrónico" />
                <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Areas")}>
                    <Text style={styles.buttonText}>Iniciar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
                    <Text style={styles.registerText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        marginBottom: 20,
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "85%",
        alignItems: "center",
        elevation: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 30,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#6A1B9A",
        paddingVertical: 10,
        borderRadius: 20,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 15,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    registerText: {
        color: "#2979FF",
        marginTop: 10,
    },
});

export default LoginScreen;
