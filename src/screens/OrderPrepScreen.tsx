import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const OrderPrepScreen = () => {
  const route = useRoute();
  const { restaurantId } = route.params;
  const userId = useSelector((state) => state.user.id); // Accessing user id from Redux store

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen", {
        restaurantId: restaurantId,
        userId: userId,
      });
    }, 3000);
  }, []);
  return (
    <View className="flex-1 items-center bg-white justify-center">
      <Image
        source={require("../../assets/pedidosyapedidos.gif")}
        className="h-80 w-80"
      />
    </View>
  );
};

export default OrderPrepScreen;
