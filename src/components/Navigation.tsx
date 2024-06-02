import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/auth/WelcomeScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import DriverSignInScreen from "../screens/driverAuth/DriverSignInScreen";
import DriverSignUpScreen from "../screens/driverAuth/DriverSignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import AllRestaurantsScreen from "../screens/AllRestaurantsScreen";
import CartScreen from "../screens/CartScreen";
import OrderPrepScreen from "../screens/OrderPrepScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import UserProfileScreen from "../screens/auth/UserProfileScreen";
import DriverHomeScreen from "../screens/DriverHomeScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  // Check if driver or user is logged in
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isDriverLoggedIn = useSelector((state) => state.driver.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isUserLoggedIn && !isDriverLoggedIn ? (
          <>
            <Stack.Screen name="WelcomeScreen" component={Welcome} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="DriverSignInScreen" component={DriverSignInScreen} />
            <Stack.Screen name="DriverSignUpScreen" component={DriverSignUpScreen} />
          </>
        ) : isUserLoggedIn ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
            <Stack.Screen name="AllRestaurantsScreen" component={AllRestaurantsScreen} />
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
          </>
        ) : (
          <>
            <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
            <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
