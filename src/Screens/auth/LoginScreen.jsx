import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Button } from "react-native";

import { useState } from "react";
import {
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import styles from "../../../styles";
import image from "../../background.png";

const initialState = {
  email: "",
  password: "",
};

SplashScreen.preventAutoHideAsync();

export default function LoginScreen({ navigation }) {
  console.log(navigation);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  console.log(isShowKeyboard);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  const [fontsLoaded] = useFonts({
    "Teko-Regular": require("../../fonts/Teko-Regular.ttf"),
  });
  const loadApplication = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={loadApplication}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground style={styles.image} source={image} resizeMode="cover">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.mainBackground,
                height: isShowKeyboard ? 320 : 400,
              }}
            >
              <View style={styles.form}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}> Sign In</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTitle}> Sign in</Text>
                </TouchableOpacity>
                <Button
                  onPress={() => navigation.navigate("Register")}
                  title="Go to registration"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
