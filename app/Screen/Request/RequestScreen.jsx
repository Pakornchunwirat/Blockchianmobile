import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

import { StyleSheet } from "react-native";

import quickdata from "./Requestdata";

export default function RequestScreen({ navigation }) {
  const data = quickdata;

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ProfileContainer}>
        <View style={styles.TextProfileContainer}>
          <Text style={{ color: "#030650", fontSize: 20, fontWeight: "bold" }}>
            คำร้องขอการเข้าถึงข้อมูล
          </Text>
        </View>
      </View>
      <View style={styles.HealthDataContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollViewContainerVertical}
        >
          {data.map((item, index) => (
            <Pressable style={styles.PressableContainerVertical} key={index}>
              <View style={styles.ContainerRequest}>
                <View style={styles.ProfileContainer1}>
                  <Image
                    source={require("./../../../assets/User1.png")} // ระบุเส้นทางไปยังไฟล์รูปภาพในเครื่อง
                    style={styles.userImage}
                  />
                  <View style={styles.TextProfileContainer}>
                    <Text
                      style={{
                        color: "#030650",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.Name}
                    </Text>
                    <Text style={{ color: "#6A6A6A", fontSize: 14 }}>{item.Mes}</Text>
                  </View>
                </View>
                <View style={styles.RequestButtonContainer}>
                  <TouchableOpacity onPress={handleClick} style={styles.RequestButton}>
                    <Text style={styles.RequestButtonText}>ปฎิเสธ</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleClick} style={styles.RequestButton1}>
                    <Text style={styles.RequestButton1Text}>ยอมรับ</Text>
                  </TouchableOpacity>
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
    backgroundColor: '#FFFFFF'
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
    marginTop: 15,
    borderRadius: 99,
  },
  ProfileContainer: {
    marginTop: 20,
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
  TextProfileContainer: {
    paddingLeft: 20,
    paddingTop: 20,
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
    maxHeight: height * 0.95, // กำหนดขนาดความสูงสูงสุดเพื่อให้เลื่อนในแนวตั้งได้
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
    alignItems: "center",
    justifyContent: "center",
  },
  ContainerRequest: {
    width: "100%",
    height: 115,
    backgroundColor: "#F2FAFA",
    borderRadius: 10,
    justifyContent: "center",
    padding: 20,
  },
  DataText: {
    fontSize: 12,
    color: "#030650",
    paddingTop: 20,
  },
  RequestButton: {
    flex: 1,
    height: 37,
    margin: 0,
    backgroundColor: "#FFD2D0",
    borderWidth: 0,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  RequestButton1: {
    flex: 1,
    height: 37,
    margin: 0,
    backgroundColor: "#0ECA43",
    borderWidth: 0,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  RequestButtonText: {
    color: "#FF3B30",
  },
  RequestButton1Text: {
    color: "white",
  },
  RequestButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
