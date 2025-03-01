import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const RegisterScreen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={["#9b59b6", "#512DA8"]} style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Registro</Text>
                <TextInput style={styles.input} placeholder="Nombre" />
                <TextInput style={styles.input} placeholder="Correo Electrónico" />
                <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
                <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Registrarme</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.loginText}>Iniciar sesión</Text>
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
        marginBottom: 30,
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
    loginText: {
        color: "#2979FF",
        marginTop: 10,
    },
});

export default RegisterScreen;
