import { View, Text } from "react-native";
import React from "react";
import { withBadge, Icon } from "@rneui/base";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <SafeAreaView className="bg-emerald-400 h-20 flex-row justify-between">
      <View className="items-center justify-center ml-5">
        <AntDesign name="menuunfold" size={24} color="white" />
      </View>
      <View className="items-center justify-center mx-auto">
        <Text className="text-xl font-bold text-white">App Like Glovo</Text>
      </View>
      <View className="items-center justify-center mr-5">
        <BadgeIcon type='material-community' name="cart" size={35} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
