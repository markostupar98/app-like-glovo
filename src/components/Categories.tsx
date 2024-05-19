import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { categories } from "../data/categories";


const Categories = () => {
  return (
    <View style={{ marginTop: 20, width: '100%', backgroundColor: '#E5E7EB' }}>
      <Text style={{ fontSize: 24, marginLeft: 8, color: '#6B7280', fontWeight: '600' }}>
        Categories
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id.toString()} // Ensure you have a unique key for each item
          renderItem={({ item }) => (
            <Pressable>
              <View style={{ borderRadius: 24, backgroundColor: '#34D399', justifyContent: 'center', alignItems: 'center', padding: 8, width: 60, marginTop: 20, marginHorizontal: 12, height: 80 }}>
                <Image style={{ height: 56, width: 56, borderRadius: 24 }} source={item.image} />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#6B7280', fontWeight: '600' }}>{item.name}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default Categories;
