import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { Icon } from "@rneui/base";
import { categories } from "../data/categories";

const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);

  return (
    <View className="flex-1">
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator>
        <View className="mt-5 flex-row justify-evenly">
          <TouchableOpacity onPress={() => setDelivery(true)}>
            <View
              className={`${
                delivery ? "bg-emerald-500" : "bg-gray-500"
              } px-3 rounded-3xl py-2`}
            >
              <Text className="text-white text-lg">Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDelivery(false)}>
            <View
              className={`${
                delivery ? "bg-gray-500" : "bg-emerald-500"
              } px-3 rounded-3xl py-2`}
            >
              <Text className="text-white text-lg">Pick up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-5 p-5 flex-row mx-5 items-center justify-center bg-gray-300 rounded-2xl">
          <View className="flex-row bg-white rounded-full p-1">
            <Icon
              type="material-community"
              name="map-marker"
              color="gray"
              size={26}
            />
            <Text className="ml-2">Banja Luka, RS</Text>
          </View>
          <View className="flex-row mx-5 bg-white rounded-full p-1">
            <Icon
              type="material-community"
              name="clock-time-four"
              color="gray"
              size={26}
            />
            <Text className="ml-2">Now</Text>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              size={26}
              color="white"
            />
          </View>
        </View>
        <View className="mt-5 w-full bg-gray-200">
          <Text className="text-xl ml-2 text-neutral-500 font-semibold">
            Categories
          </Text>
        </View>
        <View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()} // Ensure you have a unique key for each item
            renderItem={({ item }) => (
              <Pressable>
                <View className="rounded-3xl bg-emerald-400 justify-center items-center p-2 w-15 mt-5 mx-3 h-20">
                  <Image className="h-14 w-14 rounded-3xl" source={item.image} />
                </View>
                <View className="items-center">
                  <Text className="text-neutral-500 font-semibold">{item.name}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View className="mt-6 w-full bg-gray-200">
          <Text className="text-xl ml-2 text-neutral-500 font-semibold">
            Restaurants You might like
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
