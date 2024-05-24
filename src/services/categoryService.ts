import { supabase } from "../lib/supabase";

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*');
  if (error) throw error;
  return data;
};
