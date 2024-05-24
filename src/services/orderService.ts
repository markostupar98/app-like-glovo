import { supabase } from "../lib/supabase";

// Get orders
export const getOrders = async () => {
  const { data, error } = await supabase
    .from('orders')
    .select('*');
  if (error) throw error;
  return data;
};

// Update orders

export const updateOrder = async (id: number, order: any) => {
  const { data, error } = await supabase
    .from('orders')
    .update(order)
    .eq('id', id);
  if (error) throw error;
  return data;
};

// Delete order
export const deleteOrder = async (id: number) => {
  const { data, error } = await supabase
    .from('orders')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
};
