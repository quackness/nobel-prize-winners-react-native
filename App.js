import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from './screens/Categories';
import CardYearsList from './screens/CardYearsList';
import PrizeDetails from './screens/PrizeDetails';
import Laurates from './screens/Laurates';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen name="Laurates List" component={Laurates} />
          <Tab.Screen name="Prize Details" component={PrizeDetails} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Nobel Prize Categories" component={Categories} />
        <Stack.Screen name="Card Years List" component={CardYearsList} />
        <Stack.Screen name="Prize Details" component={PrizeDetails} />
      </Stack.Navigator> */}
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
