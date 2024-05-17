import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Button } from "@rneui/themed";

const Welcome = () => {
  return (
    <View className="flex-1 justify-start pt-[60px] items-center">
      <View className="my-5">
        <Text className="text-xl font-bold text-emerald-500">
          Discover restaurants
        </Text>
        <Text className="text-xl font-bold text-emerald-400">In your area</Text>
      </View>
      <View className="justify-center flex-2 mt-10">
        <Swiper autoplay>
          <View className=" mb-20 justify-center items-center">
            <Image
              source={{
                uri: "https://images.deliveryhero.io/image/stores-glovo/stores/3aa789fb3b176f79917809b1e7167953eed7fa8331fbccd9454acc859c74861c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d",
              }}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 mb-20 justify-center items-center">
            <Image
              source={{
                uri: "https://images.deliveryhero.io/image/stores-glovo/stores/3aa789fb3b176f79917809b1e7167953eed7fa8331fbccd9454acc859c74861c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d",
              }}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 mb-20 justify-center items-center">
            <Image
              source={{
                uri: "https://images.deliveryhero.io/image/stores-glovo/stores/3aa789fb3b176f79917809b1e7167953eed7fa8331fbccd9454acc859c74861c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d",
              }}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 mb-20 justify-center items-center">
            <Image
              source={{
                uri: "https://images.deliveryhero.io/image/stores-glovo/stores/3aa789fb3b176f79917809b1e7167953eed7fa8331fbccd9454acc859c74861c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d",
              }}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
        </Swiper>
        <View className="flex-1">
          <View className="w-90 mx-7 my-2">
            <Button
              title={"Sign In"}
              buttonStyle={{
                borderRadius: 30,
                backgroundColor: "rgba(111, 202, 186, 1)",
              }}
            />
          </View>
          <View className="mt-5 p-5">
            <Text className="text-neutral-400">If you don't have an account</Text>
          </View>
          <View className="justify-end flex-row mx-5">
            <Button
              title={"Create account"}
              buttonStyle={{
                borderRadius: 30,
                backgroundColor: "rgba(111, 202, 186, 1)",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
