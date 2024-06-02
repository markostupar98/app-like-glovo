import { View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderList = ({ order }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("OrderDetailsScreen", { orderId: order.id })}
    >
      <View className="mr-6 p-2 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={{ uri: order.restaurantImage }} />
        <View className="px-3 my-2 space-y-2">
          <Text>{order.restaurantName}</Text>
          <Text>{order.userAddress}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <FontAwesome name="map-marker" size={24} color="gray" />
          <Text className="text-xs">Delivery to - {order.userAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderList;
