import { Stack } from "expo-router";
import StatusProvider from "../context/FoodContext";

export default function RootLayout() {
  return (
    <StatusProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="detail/[id]" options={{ headerShown: false }} />
      </Stack>
    </StatusProvider>
  );
}
