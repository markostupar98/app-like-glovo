import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/auth/WelcomeScreen";
import SignInScreen from "./src/screens/auth/SignInScreen";
import type { RootStackParamList } from "./src/navigation/types";
import HomeScreen from "./src/screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import CartScreen from "./src/screens/CartScreen";
import OrderPrepScreen from "./src/screens/OrderPrepScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen name="CartScreen" options={{presentation:'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPrepScreen" options={{presentation:'fullScreenModal'}} component={OrderPrepScreen} />
        <Stack.Screen name="DeliveryScreen" options={{presentation:'fullScreenModal'}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
