import { StyleSheet} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from './screens/Categories';
import CardYearsList from './screens/CardYearsList';
import PrizeDetails from './screens/PrizeDetails';
import LauratesStack from './stacks/LauratesStack';
import PrizeDetailsStack from './stacks/PrizeDetailsStack';
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen name="Laurates List" component={LauratesStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <EvilIcons name="trophy" size={24} color="black" />
            ),
          }}/>
          <Tab.Screen name="Prize Details" component={PrizeDetailsStack} 
          options={{
            tabBarIcon:({color, size}) => (
              <Octicons name="person" size={24} color="black"/>
            )
          }}/>
        </Tab.Navigator>
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


//icons https://icons.expo.fyi/Index