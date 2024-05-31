import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Background from "../../components/Background";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Sign up function
  async function signUpWithEmail() {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://192.168.1.224:3000/api/auth/signup",
        {
          email: email,
          password: password,
          fullName: fullName,
          username: username,
          address: address,
          role:'user'
        }
      );
      console.log("Username, Email, FullName:", username, email, fullName);

      setLoading(false);

      if (response.status === 200) {
        Alert.alert(
          "Success",
          "Please check your email for the confirmation link."
        );
        navigation.navigate("SignInScreen");
      } else {
        throw new Error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      Alert.alert(
        "Error",
        error.response ? error.response.data.message : error.message
      );
      console.log(error.message, error.response);
    }
  }

  return (
    <Background>
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
          <View>
            <TextInput
              value={address}
              onChangeText={setAddress}
              placeholder="Address"
              className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
            />
          </View>
          <View className="border mx-5 border-neutral-300  flex-row justify-between items-center mb-5  rounded-lg">
            <View>
              <AntDesign name="lock1" size={24} color="black" />
            </View>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              className="h-10"
            />

            <View>
              <MaterialIcons
                name={`${showPassword ? "visibility" : "visibility-off"}`}
                size={24}
                color="black"
                style={{ marginRight: 5 }}
                onPress={toggleShowPassword}
              />
            </View>
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
    </Background>
  );
};

export default SignUpScreen;
