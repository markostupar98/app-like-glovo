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

// Create order


// src/services/orderService.js

// src/services/orderService.js

export const createOrder = async (userId, restaurantId, deliveryAddress, cartItems, total) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([{
        user_id: userId,
        restaurant_id: restaurantId,
        delivery_address: deliveryAddress,
        total: total,
        status: 'pending', // default status
        driver_id: null  // explicitly setting driver_id to null
      }]);

    if (error) {
      console.error("Error creating order:", error.message);
      throw error;
    }

    const orderId = data[0].id;  // Assuming the order ID is returned
    const orderItemsData = cartItems.map(item => ({
      order_id: orderId,
      dish_id: item.id,  // Ensure that the 'id' corresponds to your 'dish_id' in the cart items
      quantity: item.quantity,
      price: item.price
    }));

    const { error: itemsError } = await supabase.from('order_items').insert(orderItemsData);
    if (itemsError) {
      console.error("Error inserting order items:", itemsError.message);
      throw itemsError;
    }

    return data;
  } catch (error) {
    console.error("Error creating order:", error.message);
    throw error;
  }
};



// Assiging driver to order
const assignDriverToOrder = async (orderId, driverId) => {
  const { data, error } = await supabase
    .from('orders')
    .update({ driver_id: driverId, status: 'assigned' })
    .eq('id', orderId);

  if (error) {
    console.error('Error assigning driver to order:', error);
    return null;
  }

  return data;
};
