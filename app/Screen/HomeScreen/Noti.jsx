import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
const { width, height } = Dimensions.get("window");

import { StyleSheet } from "react-native";
import {
  Ionicons,
} from "@expo/vector-icons";

import quickdata from "./quicknoti";

export default function Noti({ hideModal }) {
  const handlePress = () => {
    navigation.navigate("HomeScreen"); // Navigate to the next screen
  };
  const data = quickdata;

  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("./../../../assets/homebackground.png")}
        style={styles.Imagecontainer}
      >
        <View style={styles.SearchContainer}>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => hideModal()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 10,
            }}
          >
            การแจ้งเตือน
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.BackgroundContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollViewContainerVertical}
        >
          {data.map((item, index) => (
            <Pressable style={styles.PressableContainerVertical} key={index}>
              <View style={styles.ContainerRequest}>
                <View>
                  <View style={styles.ProfileContainer1}>
                    <Image
                      source={require("./../../../assets/User1.png")}
                      style={styles.userImage}
                    />
                    <View style={styles.TextProfileContainer}>
                      <Text style={{ color: "#6A6A6A", fontSize: 14 }}>
                        หมอ
                      </Text>
                      <Text
                        style={{
                          color: "#030650",
                          fontSize: width > 400 ? width * 0.03 : width * 0.025,
                          fontWeight: "bold",
                        }}
                      >
                        ดร. สมชาย สายรัก
                      </Text>
                    </View>
                  </View>
                  <View style={styles.TextBottom}>
                    <Text style={{ color: "#9EA0A0", color: "#898989", fontSize: width > 400 ? width * 0.025 : width * 0.017, }}>
                      ได้ส่งคำร้องถึงการเข้าถึงข้อมูลของคุณ
                    </Text>
                    {/* <Text style={{ color: "#76D5CB", fontSize: 14, paddingLeft: 10,}}>ดูเพิ่มเติม</Text> */}
                  </View>
                </View>
                <View style={styles.TextProfileContainerRight}>
                  <Text style={{ color: "#898989", fontSize: 14 }}>
                    15 min ago.
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
  },
  Imagecontainer: {
    padding: 20,
    paddingTop: 40,
    height: 200,
    resizeMode: "cover",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  SearchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  BackgroundContainer: {
    marginTop: -100,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 702,
    zIndex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 20,
  },
  ProfileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ProfileContainer1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  HealthDataContainerRight: {},
  TextHead: {
    color: "#76D5CB",
    fontWeight: "bold",
    fontSize: 20,
  },
  TextBottom: {
    color: "#030650",
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
  },
  HealthDataRow: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  TextContainerLeft: {
    width: 80,
  },
  HealthDataContainer: {
    padding: 20,
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  HeaderTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  HeaderLink: {
    fontSize: 14,
    color: "#76D5CB",
  },
  ScrollViewContainerHorizontal: {
    flexDirection: "row",
  },
  ScrollViewContainerVertical: {
    flexDirection: "column",
    maxHeight: 1000,
  },
  PressableContainer: {
    marginRight: 10,
  },
  PressableContainerVertical: {
    marginBottom: 10,
  },
  ContainerData: {
    width: 108.99,
    height: 134,
    backgroundColor: "#F2FAFA",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ContainerRequest: {
    width: "100%",
    height: 115,
    backgroundColor: "#F2FAFA",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  TextProfileContainer: {
    paddingLeft: 10,
  },
  TextProfileContainerRight: {
    alignItems: "center",
    justifyContent: "center",
  },
});
