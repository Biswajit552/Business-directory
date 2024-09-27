import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  useFonts({
    "outfit":require ('./../assets/fonts/Outfit-Regular.ttf'),
    "outfit-bold":require ('./../assets/fonts/Outfit-Bold.ttf'),
    "outfit-semi-bold":require ('./../assets/fonts/Outfit-SemiBold.ttf'),
    "outfit-medium":require ('./../assets/fonts/Outfit-Medium.ttf'),
    
  })
  return (
    <Stack>
      {/* <Stack.Screen name="setting/index" options={{ title: "Setting" }} /> */}
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}  
