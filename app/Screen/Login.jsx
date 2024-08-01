import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const handlePress = () => {
    navigation.navigate('HomeScreen'); // Navigate to HomeScreen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/Authen.png")}
        style={styles.LoginImage}
      />
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
          <Image
            source={require("./../../assets/thaiid.png")}
            style={styles.LoginButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  LoginImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
  },
  LoginButton: {
    marginTop: 0,
    width: 335,
    height: 60,
  },
  imageContainer: {
    resizeMode: "contain",
  },
  subcontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height > 700 ? height * -0.17 : height * -0.135,
  }
});
