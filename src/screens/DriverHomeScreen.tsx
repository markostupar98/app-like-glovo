import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { fetchOrders } from "../services/orderService";
import OrderList from "../components/OrderList";

const DriverHomeScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true);
      try {
        const fetchedOrders = await fetchOrders();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View className="flex-1">
      <Text className="mt-10 font-extrabold text-lg mx-auto">
        Available Orders
      </Text>
      <ScrollView>
        {orders.map((order) => (
          <OrderList
            key={order.id}
            orderId={order.id}
            restaurant={order.restaurant}
            user={order.user}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default DriverHomeScreen;
