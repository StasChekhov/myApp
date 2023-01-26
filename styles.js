import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    // resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    // justifyContent: "center",
  },
  input: {
    height: 30,
    borderWidth: 1,
    borderColor: "#f0f8ff",
    color: "#ffffff",
    fontSize: 17,
    borderRadius: 7,
    textAlign: "center",
  },
  inpuTitle: {
    color: "#ffffff",
    marginBottom: 7,
  },
  form: {
    marginHorizontal: 40,
    ...Platform.select({
      ios: {
        marginBottom: 40,
      },
    }),
  },
  btn: {
    height: 40,
    borderRadius: 6,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#ffffff",
      },
      android: {
        backgroundColor: "#fbafba",
      },
    }),
  },
  btnTitle: {
    color: "red",
    fontSize: 18,
  },
});
export default styles;
