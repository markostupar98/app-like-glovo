import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { supabase } from "../../lib/supabase";
import * as Animatable from "react-native-animatable";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@rneui/themed";
import { Link, useNavigation } from "expo-router";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Supabase sign up
  async function signUpWithEmail() {
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
          username,
        },
      },
    });

    setLoading(false);

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert(
        "Success",
        "Please check your email for the confirmation link."
      );
      navigation.navigate("SignInScreen");
    }
  }

  return (
    <View className="flex-1">
      <Header title="Sign Up" type="back" />
      <View className="p-8 mt-3 items-center">
        <Text className="text-xl text-neutral-600">Create your account</Text>
      </View>
      <View className="items-center justify-center mt-2"></View>
      <View className="mt-8">
        <View>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
          />
        </View>
        <View>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
            className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
          />
        </View>
        <View>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
          />
        </View>
        <View className="border mx-5 border-neutral-300  flex-row justify-between items-center mb-5  rounded-lg">
          <Animatable.View>
            <AntDesign name="lock1" size={24} color="black" />
          </Animatable.View>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            className="h-10"
          />

          <Animatable.View>
            <MaterialIcons
              name={`${showPassword ? "visibility" : "visibility-off"}`}
              size={24}
              color="black"
              style={{ marginRight: 5 }}
              onPress={toggleShowPassword}
            />
          </Animatable.View>
        </View>
      </View>
      <View className="w-90 mx-7 my-2">
        <Button
          disabled={loading}
          title={"Register"}
          buttonStyle={{
            borderRadius: 30,
            backgroundColor: "rgba(111, 202, 186, 1)",
          }}
          onPress={signUpWithEmail}
        />
      </View>
      <View className="items-center my-3">
        <Text className="text-sm text-neutral-400">
          Already have an account
        </Text>
        <Pressable className="my-2">
          <Text className="font-bold underline">Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;
