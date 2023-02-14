import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";

import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreateScreen from "./Screens/mainScreen/CreateScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

const authStack = createNativeStackNavigator();
const mainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
      </authStack.Navigator>
    );
  }
  return (
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={34}
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
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </mainTab.Navigator>
  );
};
