import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";


const Featured = ({ name, description, featuredRestaurants }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-5 my-5">
        <View>
          <Text className="font-semibold text-lg" >{name}</Text>
          <Text className="text-base" >{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold" >
            See more
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={{ overflow: 'visible', paddingVertical: 20 }}
      >
        {featuredRestaurants.map((restaurant, index) => (
          <RestaurantCard item={restaurant} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
