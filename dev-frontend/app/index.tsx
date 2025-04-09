import { useContext, useEffect } from "react";
import { Redirect } from "expo-router";
import { AuthContext } from "@/src/context/AuthContext";

export default function Index() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }

    const { user } = context;

    if (user) {
        return <Redirect href="/(home)/profile" />;
    }

    return <Redirect href="/(auth)/login" />;
}