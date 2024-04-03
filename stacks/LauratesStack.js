import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Laurates from '../screens/Laurates';
import SingleLaurate from '../screens/SingleLaurate';


const Stack = createNativeStackNavigator();

function LauratesStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Laurates' component={Laurates} options={{ headerShown: false }}/>
      <Stack.Screen name='Single Laurate' component={SingleLaurate}/>
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default LauratesStack;