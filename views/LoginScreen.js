import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const storedUser = await AsyncStorage.getItem("user");
            if (!storedUser) {
                Alert.alert("Error", "No hay usuarios registrados.");
                return;
            }

            const user = JSON.parse(storedUser);
            if (user.email === email && user.password === password) {
                navigation.navigate("Areas");
            } else {
                Alert.alert("Error", "Correo o contraseña incorrectos.");
            }
        } catch (error) {
            Alert.alert("Error", "Ocurrió un problema al iniciar sesión.");
        }
    };

    return (
        <LinearGradient colors={["#9b59b6", "#512DA8"]} style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="home" size={100} color="white" />
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Inicio de sesión</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Correo Electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
