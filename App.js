import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpaceCraftScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" component = {HomeScreen} />
      <Stack.Navigator initialRouteName = "SpaceCraft" component = {SpaceCraftScreen} />
      <Stack.Navigator initialRouteName = "DailyPic" component = {DailyPicScreen} />
      <Stack.Navigator initialRouteName = "StarMap" component = {StarMapScreen} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
