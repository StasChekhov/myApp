import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./src/router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
