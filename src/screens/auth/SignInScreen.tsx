import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@rneui/themed";

const SignInScreen = () => {
  return (
    <View className="flex-1">
      <Header title="Sign In" type="back" />
      <View className="p-4">
        <Text className="text-xl text-neutral-600">
          Sign In to your account
        </Text>
      </View>
      <View className="items-center justify-center mt-4">
        <Text className="text-sm text-neutral-400">
          Please enter your email and password
        </Text>
      </View>
      <View className="mt-8">
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
          title={"Sign In"}
          buttonStyle={{
            borderRadius: 30,
            backgroundColor: "rgba(111, 202, 186, 1)",
          }}
        />
      </View>
      <View className="items-center my-3">
        <Text className="text-sm text-neutral-400">Forgot password?</Text>
        <View className="my-2">
          <Text className="font-bold">OR</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {}}
        className="p-4 border justify-center my-5 flex-row border-neutral-500 mx-5 rounded-full"
      >
        <AntDesign
          name="facebook-square"
          size={24}
          color="black"
          style={{ marginRight: 15 }}
        />
        <Text>Sign In with facebook</Text>
      </Pressable>
      <Pressable
        onPress={() => {}}
        className="p-4 border justify-center flex-row border-neutral-500 mx-5  rounded-full"
      >
        <AntDesign
          name="google"
          size={24}
          color="black"
          style={{ marginRight: 15 }}
        />
        <Text>Sign In with Google</Text>
      </Pressable>
      <View className="mt-5 p-5">
        <Text className="text-neutral-500">
          New on vugel?
        </Text>
      </View>
      <View className="justify-end flex-row mx-5">
      <Button
          title={"Create account"}
          buttonStyle={{
            borderRadius: 30,
            backgroundColor: "rgba(111, 202, 186, 1)",
          }}
        />
      </View>
    </View>
  );
};

export default SignInScreen;
