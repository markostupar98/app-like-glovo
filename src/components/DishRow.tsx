import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItemQuantity } from "../store/slice/cartSlice";

const DishRow = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items.find(cartItem => cartItem.id === item.id));

  const handleAddToCart = () => {
    dispatch(addItem({ id: item.id, name: item.name, price: item.price, quantity: 1 }));
  };

  const handleUpdateQuantity = (quantity) => {
    dispatch(updateItemQuantity({ id: item.id, quantity }));
  };

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" style={{ height: 100, width: 100 }} source={item.image} />
      <View className="flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-2 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity 
              className="p-1 rounded-full bg-emerald-400"
              onPress={() => handleUpdateQuantity(-1)}
            >
              <Entypo name="circle-with-minus" size={24} color="black" />
            </TouchableOpacity>
            <Text className="px-3">{cartItem ? cartItem.quantity : 0}</Text>
            <TouchableOpacity 
              className="p-1 rounded-full bg-emerald-400"
              onPress={handleAddToCart}
            >
              <Entypo name="circle-with-plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
