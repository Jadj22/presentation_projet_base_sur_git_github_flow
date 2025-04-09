import React, { useState, useEffect, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { AuthContext } from "@/src/context/AuthContext";
import { getProfile, logout } from "@/src/service/api";
import { router } from "expo-router";

const ProfileScreen = () => {
    const [profileData, setProfileData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }

    const { user, logout: logoutContext } = context;

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await getProfile();
                setProfileData(response.data);
            } catch (error: any) {
                const errorMsg = error.response?.data?.msg || "Erreur lors de la récupération du profil";
                setError(errorMsg);
            }
        };
        fetchProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            await logoutContext();
            router.replace("/(auth)/login");
        } catch (error: any) {
            setError("Erreur lors de la déconnexion");
        }
    };

    if (!profileData) {
        return <Text className="text-center mt-10">Chargement...</Text>;
    }

    return (
        <View className="flex-1 justify-center p-6 bg-gray-100">
            <Text className="text-2xl font-bold text-center mb-6 text-gray-800">Profil</Text>
            {error && <Text className="text-red-500 text-center mb-4">{error}</Text>}
            <View className="bg-white p-4 rounded-lg shadow-md mb-6">
                <Text className="text-lg text-gray-700">Email: {profileData.email}</Text>
                <Text className="text-lg text-gray-700">Nom: {profileData.nom}</Text>
            </View>
            <Pressable
                onPress={handleLogout}
                className="bg-red-600 rounded-lg p-3 active:bg-red-700"
            >
                <Text className="text-white text-center font-semibold">Se déconnecter</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;