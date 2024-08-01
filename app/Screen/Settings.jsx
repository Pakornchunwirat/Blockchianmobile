import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { StyleSheet } from "react-native";

import {  FontAwesome5, MaterialIcons,AntDesign,Ionicons} from "@expo/vector-icons";

export default function Settings() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("/Users/pakorn_nice/Desktop/patient/MyProject/assets/homebackground.png")}
        style={styles.Imagecontainer}
      >
        <View style={styles.ProfileContainer}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            ตั้งค่า
          </Text>
        </View>
        <View style={styles.userImageContainer}>
          <Image
            source={require("/Users/pakorn_nice/Desktop/patient/MyProject/assets/user2.png")}
            style={styles.userImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            ศรัณย์พงศ์ มะกูลต๊ะ
          </Text>
          <Text style={{ color: "#34877E", fontSize: 16 }}>1221312301</Text>
        </View>
      </ImageBackground>
      <View style={styles.optionContainer1}>
        <View style={styles.optionContainer2}>
          <View style={styles.iconContainerName}>
            <View style={styles.iconContainer}>
              <Ionicons name="exit-outline" size={24} color="#76D5CB" />
            </View>
            <View style={styles.optionTextContainer1}>
              <Text style={{ color: "#00214D", fontSize: 16 }}>ออกจากระบบ</Text>
            </View>
          </View>
          <View style={styles.optionButtonContainer1}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowModal(true)}
            >
               <MaterialIcons name="keyboard-arrow-right" size={24} color="#3D464A" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  Imagecontainer: {
    padding: 20,
    paddingTop: 40,
    height: 300,
    resizeMode: "cover",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
  },
  ScrollViewContainerHorizontal: {
    flexDirection: "row",
  },
  ScrollViewContainerVertical: {
    flexDirection: "column",
    maxHeight: 300,
  },
  userImage: {
    width: 153,
    height: 153,
  },
  userImageContainer: {
    alignItems: "center",
  },
  textContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  optionContainer1: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    width: "100#",
    height: 100,
    backgroundColor: "#F2FAFA",
    borderRadius: 10,
    justifyContent: "center",
  },
  optionContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    backgroundColor: "#E2F9F7",
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    
  },
  iconContainerName: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionTextContainer1: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  optionButtonContainer1: {
    justifyContent: "center",
  },
});
