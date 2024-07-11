import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './ProductDetails';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();
  


  return (

<GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.container}>
          
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />
        </View>
        </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
   
  },
});
