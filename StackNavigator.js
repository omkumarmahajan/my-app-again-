import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen'; 
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options ={{headersshows: false}} />
      <Stack.Screen name="Workout" component={WorkoutScreen} options ={{headersshows: false}} />
      <Stack.Screen name="Fit" component={FitScreen} options ={{headersshows: false}} />
      <Stack.Screen name='Rest' component={RestScreen} option ={{headersshows: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})