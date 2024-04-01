import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PrizeDetails from '../screens/PrizeDetails';
import Categories from '../screens/Categories';
import CardYearsList from '../screens/CardYearsList';


const Stack = createNativeStackNavigator();

function PrizeDetailsStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Categories' component={Categories} options={{ headerShown: false }}/>
        <Stack.Screen name='Card Years List' component={CardYearsList}/>
        <Stack.Screen name='Prize Details' component={PrizeDetails}/>
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default PrizeDetailsStack;