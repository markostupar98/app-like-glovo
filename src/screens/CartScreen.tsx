import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItemQuantity, removeItem } from "../store/slice/cartSlice";

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (dish) => {
    dispatch(addItem({ id: dish.id, name: dish.name, price: dish.price, quantity: 1 }));
  };

  const handleUpdateQuantity = (dishId, quantity) => {
    dispatch(updateItemQuantity({ id: dishId, quantity }));
  };

  const handleRemoveFromCart = (dishId) => {
    dispatch(removeItem({ id: dishId }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View className="bg-white flex-1 ">
      <View className="relative py-4 my-5 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-white absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Ionicons name="arrow-back-circle" size={40} color="#00d062" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-lg">
            Your Cart
          </Text>
        </View>
      </View>
      <View className="bg-emerald-300/100 opacity-50 flex-row px-4 items-center">
        <Image
          source={require("../../assets/deliveryguy.jpeg")}
          className="h-20 w-20 rounded-full"
        />
        <Text className="flex-1 pl-4 text-neutral-600">
          Deliver in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text className="font-bold text-emerald-900">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {cartItems.map((dish, index) => (
          <View
            key={index}
            className="flex-row items-center space-x-3 py-2 px-2 bg-white rounded-3xl mx-2 mb-3 shadow-md"
          >
            <Text className="font-bold text-emerald-700">{dish.quantity} x</Text>
            <Image className="h-14 w-14 rounded-full" source={dish.image} />
            <Text className="flex-1 font-bold text-gray-600">{dish.name}</Text>
            <Text className="font-semibold text-neutral-600 text-base">
              $ {dish.price}
            </Text>
            <TouchableOpacity 
              className="rounded-full bg-emerald-400" 
              onPress={() => handleUpdateQuantity(dish.id, -1)}
            >
              <Entypo name="circle-with-minus" size={20} color="white" />
            </TouchableOpacity>
            <Text className="px-3">{dish.quantity}</Text>
            <TouchableOpacity 
              className="rounded-full bg-emerald-400" 
              onPress={() => handleUpdateQuantity(dish.id, 1)}
            >
              <Entypo name="circle-with-plus" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
              className="rounded-full bg-red-400" 
              onPress={() => handleRemoveFromCart(dish.id)}
            >
              <Entypo name="circle-with-cross" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* Totals */}
      <View className="p-6 px-8 rounded-t-3xl space-y-4 bg-emerald-500">
        <View className="flex-row justify-between">
          <Text className="text-white">Subtotal</Text>
          <Text className="text-white font-extrabold">${calculateSubtotal()}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-white">Delivery Fee</Text>
          <Text className="text-white font-extrabold">$2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-white">Total</Text>
          <Text className="text-white font-extrabold">${calculateSubtotal() + 2}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPrepScreen")}
            className="bg-emerald-400/100 p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
  