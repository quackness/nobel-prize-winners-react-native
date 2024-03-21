import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import CardYearsList from './screens/CardYearsList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
           <Stack.Navigator>
        <Stack.Screen name="Nobel Prize Categories" component={Categories} />
        <Stack.Screen name="CardYearsList" component={CardYearsList} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
