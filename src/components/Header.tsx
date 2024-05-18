import { View, Text, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import type { GeneralNavigationProp } from "../navigation/types"; // Adjust the path if necessary

type AntDesignIconName =
  | "key"
  | "filter"
  | "find"
  | "link"
  | "back"
  | "stepforward"
  | "stepbackward"
  | "forward"
  | "banckward" // <-- Corrected typo here
  | "caretright"
  | "caretleft"
  | "caretdown"
  | "caretup"
  | "rightcircle"
  | "leftcircle"
  | undefined;

type HeaderProps = {
  title: string;
  type: AntDesignIconName;
  navigation: GeneralNavigationProp; // Use the defined union type here
};

const Header = ({ title, type, navigation }: HeaderProps) => {
  return (
    <SafeAreaView className="flex-row bg-emerald-300/70 h-20 items-center">
      <View className="mt-5 ml-3">
        <AntDesign
          onPress={() => {
            navigation.goBack();
          }}
          name={type}
          size={28}
          color="black"
        />
      </View>
      <View className="p-4 mt-5">
        <Text className="text-xl">{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
