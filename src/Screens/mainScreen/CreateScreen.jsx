import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";

const CreateScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={{ marginTop: 100 }}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>

        <TouchableOpacity
          style={{ borderColor: "red" }}
          onPress={requestPermission}
        >
          <Text>grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // function toggleCameraType() {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );

  //   console.log("type", type);
  // }
  const photoTake = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);

    // setType((current) =>
    //   current === CameraType.back ? CameraType.front : CameraType.back
    // );

    console.log("type", type);
    console.log("photo", photo);
    console.log("camera", camera);
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };
  return (
    <>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={type}
          ref={setCamera}
          onCameraReady={onCameraReady}
          onMountError={(error) => {
            console.log("cammera error", error);
          }}
        >
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 100 }}
            />
          </View>
          <TouchableOpacity style={styles.shotContainer} onPress={photoTake}>
            <Text style={styles.shot}>Shot</Text>
          </TouchableOpacity>
        </Camera>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  camera: {
    flex: 1,
    // height: 300,
    // marginTop: 300,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  shotContainer: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "white",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  shot: {
    // marginTop: 250,
    fontSize: 25,
    color: "#ffffff",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 5,
    borderColor: "#ffffff",
    borderWidth: 1,
  },
});
export default CreateScreen;
