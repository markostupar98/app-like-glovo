import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";

const Featured = ({ name, description, featuredRestaurants }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{name}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {featuredRestaurants.map((restaurant, index) => (
          <RestaurantCard item={restaurant} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
