import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, ScrollView, Pressable, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Datalist from './Datalist';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Data() {
  const [search, setSearch] = useState('');
  const data = Datalist;
  const navigation = useNavigation();

  const handlePress = (id, text) => {
    navigation.navigate('Detail', { id, text });
  };

  const filteredData = data.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('./../../../assets/homebackground.png')} style={styles.Imagecontainer}>
        <View style={styles.SearchContainer}>
          <Text style={styles.HeaderText}>
            ดูข้อมูลแฟ้มสุขภาพ
          </Text>
          <View style={styles.SearchTextInputContainer}>
            <FontAwesome5 style={styles.Searchbtn} name="search" size={20} color="#C7C7C7" />
            <TextInput
              placeholder="Search"
              style={styles.textInput}
              value={search}
              onChangeText={(text) => setSearch(text)}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.BackgroundContainer}>
        <View style={styles.HealthDataContainer}>
          <View style={[styles.ScrollViewContent, { minHeight: 500 }]}>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <Pressable style={styles.PressableContainer} key={index} onPress={() => handlePress(item.id, item.text)}>
                  <View style={styles.ContainerData}>
                    <Text style={styles.DataTextID}>{item.id}</Text>
                    <Text style={styles.DataText}>{item.text}</Text>
                  </View>
                </Pressable>
              ))
            ) : (
              <Text style={styles.NoResultsText}>No results found</Text>
            )}
            {filteredData.length % 3 !== 0 && <View style={styles.FillerContainer} />}
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
    backgroundColor: "#FFFFFF"
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
    marginTop: 15,
  },
  HeaderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  SearchTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginLeft: -15,
    width: '90%',
    height: height * 0.06,
    color: '#C7C7C7',
    selectionColor: 'transparent',
    underlineColorAndroid: 'transparent',
    outlineStyle: 'none',
  },
  Searchbtn: {
    padding: 10,
  },
  BackgroundContainer: {
    alignItems: 'center',
    marginTop: -30,
    backgroundColor: '#FFFFFF',
    width: '100%',
    zIndex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  HealthDataContainer: {
    padding: 20,
    width: '100%',
  },
  ScrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  PressableContainer: {
    flexBasis: '30%',
    marginVertical: 10,
  },
  ContainerData: {
    backgroundColor: '#F2FAFA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 130,
  },
  DataText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  DataTextID: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#76D5CB',
  },
  FillerContainer: {
    flexBasis: '30%',
    marginVertical: 10,
    height: 130,
  },
  NoResultsText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C7C7C7',
    marginTop: 20,
  },
});
