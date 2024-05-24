import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <View className="mt-5 w-full bg-gray-200">
      <Text className="text-xl ml-2 text-neutral-500 font-semibold">
        Categories
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable>
              <View className="rounded-3xl bg-emerald-400 justify-center items-center p-2 w-15 mt-5 mx-3 h-20">
                <Image className="h-14 w-14 rounded-3xl" source={{ uri: item.image }} />
              </View>
              <View className="items-center">
                <Text className="text-neutral-500 font-semibold">{item.name}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default Categories;
