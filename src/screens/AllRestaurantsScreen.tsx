// AllRestaurantsScreen.tsx
import React from 'react';
import { View, Text, ScrollView } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import AllRestaurantsCard from '../components/AllRestaurantsCard';
import Header from '../components/Header';

const AllRestaurantsScreen = ({ route }) => {
  const { restaurants } = route.params;

  return (
    <View className='flex-1 mt-2'>
      <Header title='Restaurants' type='back' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      >
        {restaurants.map((restaurant, index) => (
          <AllRestaurantsCard item={restaurant} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AllRestaurantsScreen;
