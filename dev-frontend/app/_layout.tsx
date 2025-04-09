import { Slot } from "expo-router";
import { AuthProvider } from "@/src/context/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@/global.css"

export default function RootLayout() {
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <Slot />
            </SafeAreaProvider>
        </AuthProvider>
    );
}