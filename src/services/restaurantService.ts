// services/restaurantService.js
import { supabase } from '../lib/supabase';  // Adjust the path to your Supabase client

export const getRestaurants = async () => {
  const { data, error } = await supabase
    .from('restaurants')
    .select(`
      id,
      name,
      image,
      address,
      category,
      categories (name)  // Assuming 'category' is the foreign key referencing 'categories.id'
    `);

  if (error) {
    console.error("Failed to fetch restaurants:", error.message);
    return [];
  }

  // Map the data to include the category name directly in the restaurant object
  return data.map(restaurant => ({
    ...restaurant,
    categoryName: restaurant.categories.name  // Assuming 'name' is the field in categories
  }));
};


// services/restaurantService.js


export const fetchRestaurantDetails = async (restaurantId) => {
  if (!restaurantId) {
    console.error("fetchRestaurantDetails was called without a restaurantId");
    return { restaurant: null, dishes: [], error: "No restaurant ID provided" };
  }

  const { data: restaurant, error: restaurantError } = await supabase
    .from('restaurants')
    .select(`
      id,
      name,
      image,
      address,
      latitude, 
      longitude, 
      category: categories (name),
      dishes!inner(*)  
    `)
    .eq('id', restaurantId)
    .single();

  if (restaurantError) {
    console.error("Error fetching restaurant details:", restaurantError.message);
    return { restaurant: null, dishes: [], error: restaurantError.message };
  }

  const dishes = restaurant.dishes || [];
  delete restaurant.dishes; // Optionally clean up the restaurant object

  return { restaurant, dishes, error: null };
};


