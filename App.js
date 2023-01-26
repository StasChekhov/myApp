import {
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import styles from "./styles";
import image from "./src/background.png";
import { useState } from "react";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  console.log(isShowKeyboard);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
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
            <View
              style={{
                ...styles.form,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}> Sign In</Text>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
