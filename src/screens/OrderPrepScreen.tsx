import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OrderPrepScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('DeliveryScreen')
        }, 3000);
    },[])
  return (
    <View className="flex-1 items-center bg-white justify-center">
        <Image source={require('../../assets/pedidosyapedidos.gif')}  className="h-80 w-80"/>
    </View>
  );
};

export default OrderPrepScreen;
