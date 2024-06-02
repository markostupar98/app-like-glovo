import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable";
import { useDispatch } from 'react-redux';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Background from "../../components/Background";
import { signinDriver } from "../../services/authService";
import { setUser } from "../../store/slice/userSlice";
import { setDriver } from "../../store/slice/driverSlice";

const DriverSignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Password hide func
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Sign in func
  const signInWithEmail = async () => {
    setLoading(true);
    try {
      const { token, driverId, error } = await signinDriver(email, password);
      if (error) {
        throw new Error(error);
      }
      dispatch(setDriver({ id: driverId, token }));
      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Background>
      <View className="flex-1">
        <Header title="Sign In As Driver" type="back" />
        <View className="p-4">
          <Text className="text-xl text-neutral-600">
            Sign In and start driving
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
            title={"Sign In"}
            disabled={loading}
            buttonStyle={{
              borderRadius: 30,
              backgroundColor: "rgba(111, 202, 186, 1)",
            }}
            onPress={signInWithEmail}
          />
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

        <View className="justify-end my-5 flex-row mx-5">
          <Button
            onPress={() => navigation.navigate("DriverSignUpScreen")}
            title={"Register As Driver"}
            buttonStyle={{
              borderRadius: 30,
              backgroundColor: "rgba(111, 202, 186, 1)",
            }}
          />
        </View>
      </View>
    </Background>
  );
};

export default DriverSignInScreen;
