import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";

const AllRestaurantsCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("RestaurantScreen", { ...item })}
      >
        <View className="mx-2 my-2 bg-white rounded-3xl p-2 shadow-lg">
          <Image className="h-40 w-80 rounded-t-3xl" source={{uri:item.image}} />
          <View className="px-3  mt-2 space-y-2">
            <Text className="font-semibold">{item.name}</Text>
            <Text className="mb-2">Category: {item.categoryName}</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={24} color="gray" />
            <Text className="text-xs">Nearby - {item.address}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default AllRestaurantsCard;
