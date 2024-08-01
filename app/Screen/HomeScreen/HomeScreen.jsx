import React, { useState } from "react";
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
  StyleSheet
} from "react-native";

const { width, height } = Dimensions.get("window");

import { Fontisto, FontAwesome5, MaterialIcons,FontAwesome } from "@expo/vector-icons";
import Datalist from './../Data/Datalist';
import quickdata3 from "../Request/Requestdata";
import Noti from "./Noti";

export default function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Datadetail"); // Adjusted for navigation to Data detail screen
  };

  const handlePressRequestScreen = () => {
    navigation.navigate("RequestScreen"); // Adjusted for navigation to Data detail screen
  };

  const handlePressData = () => {
    navigation.navigate("Data"); // Adjusted for navigation to Data detail screen
  };

  const data = Datalist;
  const data1 = quickdata3;

  const handleClick = () => {
    alert("Button clicked!");
  };

  const [showModal, setShowModal] = useState(false);


  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("./../../../assets/homebackground.png")}
        style={styles.Imagecontainer}
      >
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileContainer1}>
            <Image
              source={require("./../../../assets/User1.png")}
              style={styles.userImage}
            />
            <View style={styles.TextProfileContainer}>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                สวัสดี! ศรัณย์พงศ์ มะกูลต๊ะ
              </Text>
              <Text style={{ color: "white" }}>ยินดีต้อนรับ</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
              <Fontisto name="bell-alt" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.BannerContainer}>
        <Image
          source={require("./../../../assets/banner.png")}
          style={styles.BannerImage}
        />
      </View>
      <View style={styles.HealthDataContainer}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderTitle}>ข้อมูลแฟ้มสุขภาพ</Text>
          <TouchableOpacity onPress={handlePressData}>
            <Text style={styles.HeaderLink}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.ScrollViewContainerHorizontal}
        >
          {data.map((item, index) => (
            <Pressable style={styles.PressableContainer} key={index}>
              <TouchableOpacity onPress={handlePress}>
                <View style={styles.ContainerData}>
                <Text style={styles.DataTextID}>{item.id}</Text>
                  <Text style={styles.DataText}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={styles.HealthDataContainer}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderTitle}>คำร้องขอการเข้าถึงข้อมูล</Text>
          <TouchableOpacity onPress={handlePressRequestScreen}>
            <Text style={styles.HeaderLink}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollViewContainerVertical}
        >
          {data1.map((item, index) => (
            <Pressable style={styles.PressableContainerVertical} key={index}>
              <View style={styles.ContainerRequest}>
                <View style={styles.ProfileContainer1}>
                  <Image
                    source={require("./../../../assets/User1.png")}
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
                  <button onClick={handleClick} style={styles.RequestButton}>
                    ปฎิเสธ
                  </button>
                  <button onClick={handleClick} style={styles.RequestButton1}>
                    ยอมรับ
                  </button>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <Modal animationType="slide" visible={showModal}>
        <Noti hideModal={() => setShowModal(false)}></Noti>
      </Modal>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  TextProfileContainer: {
    paddingLeft: 10,
  },
  BannerContainer: {
    alignItems: "center",
    marginTop: -80,
    margin: 20,
  },
  BannerImage: {
    width: "100%",
    height: height * 0.2,
    borderRadius: 10,
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
    maxHeight: 300,
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
    fontWeight: 'bold',
  },
  RequestButton: {
    flex: 1,
    height: 37,
    backgroundColor: "#FFD2D0",
    color: "#FF3B30",
    borderWidth: 0,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  RequestButton1: {
    flex: 1,
    height: 37,
    backgroundColor: "#0ECA43",
    color: "white",
    borderWidth: 0,
    borderRadius: 10,
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  RequestButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  DataTextID:{
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#76D5CB'
  },
});
