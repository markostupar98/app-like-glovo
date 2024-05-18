import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { Icon } from "@rneui/base";

const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);

  return (
    <View className="flex-1">
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator>
        <View className="mt-5 flex-row justify-evenly">
          <TouchableOpacity onPress={() => setDelivery(true)}>
            <View className={`${delivery ? "bg-emerald-500" : "bg-gray-500" } px-3 rounded-3xl py-2`}>
              <Text className="text-white text-lg">Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDelivery(false)}>
            <View className={`${delivery ? "bg-gray-500" : "bg-emerald-500" } px-3 rounded-3xl py-2`}>
              <Text className="text-white text-lg">Pick up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-5 p-5 flex-row mx-5 items-center justify-center bg-gray-300 rounded-2xl">
            <View className="flex-row bg-white rounded-full p-1">
                <Icon type='material-community' name='map-marker' color='gray' size={26} />
                <Text className="ml-2">Banja Luka, RS</Text>
            </View>
            <View className="flex-row mx-5 bg-white rounded-full p-1">
                <Icon type='material-community' name='clock-time-four' color='gray' size={26} />
                <Text className="ml-2">Now</Text>
            </View>
            <View>
                <Icon type="material-community" name="tune" size={26} color='white' />
            </View>
        </View>
        <View className="mt-5 w-full bg-gray-200">
            <Text className="text-xl text-neutral-500 font-semibold">Categories</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
