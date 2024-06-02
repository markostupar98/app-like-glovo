import axios from 'axios';

// Create order function
export const createOrder = async (userId, restaurantId, deliveryAddress, cartItems, total) => {
  try {
    const response = await axios.post('http://192.168.0.35:3000/api/orders', {
      userId,
      restaurantId,
      deliveryAddress,
      cartItems,
      total,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
