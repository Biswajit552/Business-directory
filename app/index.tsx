import { Link, Redirect } from "expo-router";
import { ActivityIndicator, Alert, Button, Text, View } from "react-native";

export default function Index() {
  return (
    <Redirect href={'/home'} />
  );
}
