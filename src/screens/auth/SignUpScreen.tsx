import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@rneui/themed";

const SignUpScreen = () => {
  return (
    <View className="flex-1">
    <Header title="Sign Up" type="back" />
    <View className="p-8 mt-3 items-center">
      <Text className="text-xl text-neutral-600">
        Create your account
      </Text>
    </View>
    <View className="items-center justify-center mt-2">
    </View>
    <View className="mt-8">
    <View>
        <TextInput
          placeholder="Username"
          className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
        />
      </View>
      <View>
        <TextInput
          placeholder="Full Name"
          className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
        />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
        />
      </View>
      <View className="border mx-5 border-neutral-300  flex-row justify-between items-center mb-5  rounded-lg">
        <Animatable.View>
          <AntDesign name="lock1" size={24} color="black" />
        </Animatable.View>
        <TextInput placeholder="Password" className="h-10" />

        <Animatable.View>
          <MaterialIcons
            name="visibility-off"
            size={24}
            color="black"
            style={{ marginRight: 5 }}
          />
        </Animatable.View>
      </View>
    </View>
    <View className="w-90 mx-7 my-2">
      <Button
        title={"Register"}
        buttonStyle={{
          borderRadius: 30,
          backgroundColor: "rgba(111, 202, 186, 1)",
        }}
        onPress={()=>{navigation.navigate('HomeScreen')}}
      />
    </View>
    <View className="items-center my-3">
      <Text className="text-sm text-neutral-400">Already have an account</Text>
      <View className="my-2">
        <Text className="font-bold underline">Sign In</Text>
      </View>
    </View>
  
    
    
  </View>
  );
};

export default SignUpScreen;
