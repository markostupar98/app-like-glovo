import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import {  useSelector } from "react-redux";
import { fetchRestaurantDetails } from "../services/restaurantService";
import { fetchUserProfile } from "../services/userService";
import { calculateDelivery, getDistanceFromLatLonInKm } from "../lib/deliveryFeeandTimeCalc";

const DeliveryScreen = () => {
  const route = useRoute();
  const userId = useSelector((state) => state.user.id);  // Accessing user id from Redux store
  const { restaurantId } = route.params;
  const [deliveryInfo, setDeliveryInfo] = useState({ fee: 0, time: 0 });
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);  // State to store user profile

  useEffect(() => {
    const loadDetails = async () => {
      if (!restaurantId || !userId) {
        Alert.alert("Error", "Restaurant ID or User ID is missing.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);

        const [{ restaurant, error: restaurantError }, { profile, error: profileError }] = await Promise.all([
          fetchRestaurantDetails(restaurantId),
          fetchUserProfile(userId),
        ]);

        if (restaurantError) throw new Error(restaurantError);
        if (profileError) throw new Error(profileError);

        if (restaurant && profile) {
          setProfile(profile);  // Set the profile state
          const distance = getDistanceFromLatLonInKm(
            profile.latitude,
            profile.longitude,
            restaurant.latitude,
            restaurant.longitude
          );
          const { deliveryFee, deliveryTime } = calculateDelivery(distance);
          setDeliveryInfo({ fee: deliveryFee, time: deliveryTime });
        }
      } catch (error) {
        console.error("Error loading details:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [restaurantId, userId]);

  const navigation = useNavigation();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!profile) {
    return <Text>No profile data available.</Text>;
  }
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: profile.latitude,
          longitude: profile.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: profile.latitude,
            longitude: profile.longitude,
          }}
          title={profile.name}
          description={profile.description}
          pinColor="#6B7280"
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-5">
          <View>
            <Text className="text-lg text-gray-500 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-lg text-gray-500 font-extrabold">
              In {deliveryInfo.time.toFixed(0)} minutes
            </Text>
            <Text className="mt-2 text-gray-600 font-semibold">
              Your order is on the way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../../assets/deliveryguy.jpeg")}
          />
        </View>
        <View className="bg-emerald-400/100 p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View className="p-1 rounded-full bg-emerald-400/100">
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../../assets/driver.jpeg")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">
              Drajver Drajver
            </Text>
            <Text className="text-lg font-bold text-white">
              Your delivery driver
            </Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <AntDesign name="phone" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} className="bg-white p-2 rounded-full">
              <Ionicons name="exit-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
