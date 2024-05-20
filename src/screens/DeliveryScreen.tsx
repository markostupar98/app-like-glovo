import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { restaurants } from "../data/restaurants";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const restaurant = restaurants[6];
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.name}
          description={restaurant.description}
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
              In 20-30 minutes
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
