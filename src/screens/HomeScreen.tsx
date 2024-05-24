import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import Search from "../components/SearchBar";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import { getCategories } from "../services/categoryService";
import { getRestaurants } from "../services/restaurantService";

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchRestaurants = async () => {
      try {
        const restaurantsData = await getRestaurants();
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchCategories();
    fetchRestaurants();
  }, []);

  return (
    <View className="flex-1">
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <Search />
        <Categories categories={categories} />
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
