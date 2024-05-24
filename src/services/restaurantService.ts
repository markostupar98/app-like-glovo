import { supabase } from "../lib/supabase";

export const getRestaurants = async () => {
  const { data, error } = await supabase
    .from('restaurants')
    .select('*');
  if (error) throw error;
  return data;
};
