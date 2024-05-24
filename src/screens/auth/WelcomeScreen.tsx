import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Button } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { WelcomeScreenProps } from "../../navigation/types";

const Welcome = ({ navigation }: WelcomeScreenProps) => {
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
              source={require("../../../assets/carousel/carousel4.webp")}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 mb-20 justify-center items-center">
            <Image
              source={require("../../../assets/carousel/carousel3.webp")}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 mb-20 justify-center items-center">
            <Image
              source={require("../../../assets/carousel/carousel2.webp")}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 mb-20 justify-center items-center">
            <Image
              source={require("../../../assets/carousel/carousel1.webp")}
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
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
            />
          </View>
          <View className="mt-5 p-5">
            <Text className="text-neutral-400">
              If you don't have an account
            </Text>
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
