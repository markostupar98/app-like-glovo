import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const navigation = useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')} className="bg-emerald-400 flex-row justify-between items-center mx-5 rounded-full p-4 py-3">
        <View className="p-2 px-4 rounded-full bg-emerald-300/10">
          <Text className="font-extrabold text-white text-lg">5</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
            View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">
            $ 25
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
