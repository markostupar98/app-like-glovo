import { supabase } from "./supabase";
import haversine from 'haversine';

export const calculateDistance = (start: Coordinates, end: Coordinates): number => {
  return haversine(start, end, { unit: 'meter' });
};


interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  const getUserCoordinates = async (userId: string): Promise<Coordinates | null> => {
    const { data, error } = await supabase
      .from('profiles')
      .select('latitude, longitude')
      .eq('id', userId)
      .single();
  
    if (error) {
      console.error('Error fetching user coordinates:', error);
      return null;
    }
  
    return {
      latitude: data.latitude,
      longitude: data.longitude,
    };
  };
  
  const getRestaurantCoordinates = async (restaurantId: string): Promise<Coordinates | null> => {
    const { data, error } = await supabase
      .from('restaurants')
      .select('latitude, longitude')
      .eq('id', restaurantId)
      .single();
  
    if (error) {
      console.error('Error fetching restaurant coordinates:', error);
      return null;
    }
  
    return {
      latitude: data.latitude,
      longitude: data.longitude,
    };
  };