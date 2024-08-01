import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, text } = route.params;

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('./../../../assets/homebackground.png')}
        style={styles.Imagecontainer}
      >
        <View style={styles.SearchContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>{text}</Text>
        </View>
      </ImageBackground>

      <View style={styles.BackgroundContainer}>
        <View style={styles.HealthDataContainer}>
          <View style={styles.HealthDataRow}>
            <View style={styles.HealthDataContainerLeft}>
              <View style={styles.TextContainerLeft}>
                <Text style={styles.TextHead}>ชื่อ</Text>
              </View>
              <Text style={styles.TextBottom}>ศรัณย์พงศ์</Text>
              <Text>Data Detail for ID: {id}</Text>
            </View>
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
  },
  Imagecontainer: {
    padding: 20,
    paddingTop: 40,
    height: 200,
    resizeMode: 'cover',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: 'hidden',
  },
  SearchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  BackgroundContainer: {
    marginTop: -100,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 702,
    zIndex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  HealthDataContainer: {
    padding: 20,
  },
  HealthDataContainerLeft: {
    paddingRight: 150,
  },
  TextHead: {
    color: '#76D5CB',
    fontWeight: 'bold',
    fontSize: 20,
  },
  TextBottom: {
    color: '#030650',
  },
  HealthDataRow: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  TextContainerLeft: {
    width: 80,
  },
});
