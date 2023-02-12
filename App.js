import * as SplashScreen from "expo-splash-screen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/Screens/auth/LoginScreen";
import RegistrationScreen from "./src/Screens/auth/RegistrationScreen";
import PostsScreen from "./src/Screens/mainScreen/PostsScreen";
import CreateScreen from "./src/Screens/mainScreen/CreateScreen";
import ProfileScreen from "./src/Screens/mainScreen/ProfileScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

SplashScreen.preventAutoHideAsync();

const authStack = createNativeStackNavigator();
const mainTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <mainTab.Navigator
        initialRouteName="TabsNav"
        screenOptions={{
          tabBarStyle: { backgroundColor: "mediumseagreen", opacity: "0.9" },

          tabBarActiveTintColor: "#475B35",
          tabBarInactiveTintColor: "white",
          tabBarHideOnKeyboard: false,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <mainTab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          name="Posts"
          component={PostsScreen}
        />
        <mainTab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          }}
          name="Create"
          component={CreateScreen}
        />
        <mainTab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </mainTab.Navigator>
    </NavigationContainer>
  );
}

/* <mainTab.Navigator>
  <mainTab.Screen name="Posts" component={PostsScreen} />
  <mainTab.Screen name="Create" component={CreateScreen} />
  <mainTab.Screen name="Profile" component={ProfileScreen} />
</mainTab.Navigator>; */

<authStack.Navigator>
  <authStack.Screen
    options={{
      headerShown: false,
    }}
    name="Login"
    component={LoginScreen}
  />
  <authStack.Screen
    options={{
      headerShown: false,
    }}
    name="Register"
    component={RegistrationScreen}
  />
</authStack.Navigator>;
