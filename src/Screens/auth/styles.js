import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  input: {
    height: 50,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "mediumseagreen",
    color: "black",
    fontSize: 17,
    borderRadius: 8,
    textAlign: "left",
    backgroundColor: "#f6f6f6",
    // marginHorizontal: 40,
  },

  form: {
    // width: "100%",
    // alignItems: "center",
    // marginHorizontal: 100,
  },
  btn: {
    height: 50,
    width: 340,
    borderRadius: 100,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",

    ...Platform.select({
      ios: {
        backgroundColor: "mediumseagreen",
      },
      android: {
        backgroundColor: "#fbafba",
      },
    }),
  },
  btnTitle: {
    color: "white",
    fontSize: 36,
    fontFamily: "Teko-Regular",
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  headerTitle: {
    fontSize: 30,
    color: "black",
    fontFamily: "Teko-Regular",
  },
  mainBackground: {
    alignItems: "center",
    opacity: "0.9",
    paddingTop: 30,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
export default styles;
