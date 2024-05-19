import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation, useRoute } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import { dishes } from "../data/dishes";
import CartIcon from "../components/CartIcon";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  console.log("restaurant:", item);
  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-10 left-4 bg-gray-50 p-2 rounded-full"
          >
            <Ionicons name="arrow-back-circle" size={40} color="#00d062" />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-semibold">{item.name}</Text>
            <View> 
            <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <View className="px-3 pb-2 space-y-2">
          <Text className="font-semibold text-base">{item.category}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <FontAwesome name="map-marker" size={24} color="gray" />
          <Text className="text-xs">Nearby - {item.address}</Text>
        </View>
      </View>
      </View>
          </View>
        </View>
        <View className="pb-36 bg-white">
<Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
{/* Dishes */}
{
    item.dishes.map((dish, index)=><DishRow item={{...dish}} key={index} />)
}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
