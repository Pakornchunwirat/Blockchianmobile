import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import RequestScreen from '../Screen/Request/RequestScreen';
import Data from '../Screen/Data/Data';
import Accident from '../Screen/Data/Detail';
import Settings from '../Screen/Settings';
import { Text, StyleSheet } from 'react-native';
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DataStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Data" component={Data} />
      <Stack.Screen name="DataStackNavigator" component={DataStackNavigator} />
      <Stack.Screen name="RequestScreen" component={RequestScreen} />
      <Stack.Screen name="Detail" component={Accident} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          marginTop: -20,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 10, marginTop: -15 }}>
              หน้าแรก
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Data"
        component={DataStackNavigator}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 10, marginTop: -15 }}>
              ดูข้อมูล
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 10, marginTop: -15 }}>
              คำขอ
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Entypo name="user" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 10, marginTop: -15 }}>
              ตั้งค่า
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
});
