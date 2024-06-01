// services/restaurantService.js
import axios from 'axios';

export const getRestaurants = async () => {
  try {
    const response = await axios.get('http://192.168.0.35:3000/api/restaurants');
    const data = response.data;

    // Map the data if needed or use it directly
    return data.map(restaurant => ({
      ...restaurant,
      categoryName: restaurant.category.name // Adjust based on actual data structure
    }));
  } catch (error) {
    console.error("Failed to fetch restaurants:", error);
    return [];
  }
};

// services/restaurantService.js


export const fetchRestaurantDetails = async (restaurantId) => {
  if (!restaurantId) {
    console.error("fetchRestaurantDetails was called without a restaurantId");
    return { restaurant: null, dishes: [], error: "No restaurant ID provided" };
  }

  try {
    const response = await axios.get(`http://192.168.0.35:3000/api/restaurants/${restaurantId}`);
    const restaurant = response.data;

    if (!restaurant) {
      return { restaurant: null, dishes: [], error: "Restaurant not found" };
    }

    // Assume the backend returns restaurant details including an array of dishes
    const dishes = restaurant.dishes || [];
    delete restaurant.dishes; // Clean up the restaurant object if necessary

    return { restaurant, dishes, error: null };
  } catch (error) {
    console.error("Error fetching restaurant details:", error.message);
    return { restaurant: null, dishes: [], error: error.message };
  }
};


