import { Stack } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "@/src/context/AuthContext";
import { Redirect } from "expo-router";

export default function HomeLayout() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { user } = context;

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="profile" />
      </Stack>
  );
}