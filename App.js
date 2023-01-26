import {
  // StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Text,
  // Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import image from "./src/background.png";

export default function App() {
  console.log(Platform.OS);
  // console.log("Stas", Platform.isPad);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} resizeMode="cover">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.form}>
            <View>
              <Text style={styles.inpuTitle}>Email Address</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.inpuTitle}>Password</Text>
              <TextInput style={styles.input} secureTextEntry={true} />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
              <Text style={styles.btnTitle}> Sign in</Text>
            </TouchableOpacity>
            {/* <Button title="Sign in" color={"#ffffff"} />  */}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
