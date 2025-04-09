import React, { useState, useContext } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "@/src/context/AuthContext";
import { register, login } from "@/src/service/api";
import { router } from "expo-router";

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [error, setError] = useState<string | null>(null);
    const context = useContext(AuthContext);

    if (!context) throw new Error("AuthContext must be used within an AuthProvider");

    const { login: loginContext } = context;

    const handleRegister = async () => {
        try {
            setError(null);
            const response = await register(email, password, nom);
            const { user } = response.data;
            const loginResponse = await login(email, password);
            const { access_token, refresh_token, user: loginUser } = loginResponse.data;
            await loginContext(access_token, refresh_token, loginUser);
            router.replace("/(home)/profile");
        } catch (error: any) {
            const errorMsg = error?.response?.data?.msg || "Une erreur est survenue";
            setError(errorMsg);
        }
    };

    return (
        <SafeAreaView className="flex-1 justify-center p-6 bg-gray-100">
            <Text className="text-2xl font-bold text-center mb-6 text-gray-800">Inscription</Text>
            {error && <Text className="text-red-500 text-center mb-4">{error}</Text>}
            <TextInput
                placeholder="Nom"
                value={nom}
                onChangeText={setNom}
                className="border border-gray-300 rounded-lg p-3 mb-4 bg-white shadow-sm"
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                className="border border-gray-300 rounded-lg p-3 mb-4 bg-white shadow-sm"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="border border-gray-300 rounded-lg p-3 mb-6 bg-white shadow-sm"
            />
            <Pressable onPress={handleRegister} className="bg-blue-600 rounded-lg p-3 mb-4 active:bg-blue-700">
                <Text className="text-white text-center font-semibold">S'inscrire</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/(auth)/login")} className="bg-gray-200 rounded-lg p-3 active:bg-gray-300">
                <Text className="text-gray-700 text-center font-semibold">Se connecter</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default RegisterScreen;
