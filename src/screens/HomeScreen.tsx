import {
  View,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import { categories } from "../data/categories";
import Search from "../components/SearchBar";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import { restaurants } from "../data/restaurants";

const HomeScreen = () => {

  return (
    <View className="flex-1">
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <Search />
        <Categories />
       
          <Featured 
            name="Featured Restaurants" 
            description="Handpicked places you'll love" 
            featuredRestaurants={restaurants} 
          />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
