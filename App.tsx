import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/auth/WelcomeScreen";
import SignInScreen from "./src/screens/auth/SignInScreen";
import type { RootStackParamList } from "./src/navigation/types";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import CartScreen from "./src/screens/CartScreen";
import OrderPrepScreen from "./src/screens/OrderPrepScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import UserProfileScreen from "./src/screens/auth/UserProfileScreen";



const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen
          name="CartScreen"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPrepScreen"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPrepScreen}
        />
        <Stack.Screen
          name="DeliveryScreen"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
        <Stack.Screen
          name="UserProfileScreen"
          options={{ presentation: "fullScreenModal" }}
          component={UserProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
