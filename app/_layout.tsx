import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      
      {/* <Stack.Screen name="setting/index" options={{ title: "Setting" }} /> */}
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}
