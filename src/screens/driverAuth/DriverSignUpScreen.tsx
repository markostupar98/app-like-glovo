import { View, Text, TextInput, Pressable, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { supabase } from "../../lib/supabase";
import * as Animatable from "react-native-animatable";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Picker } from "@react-native-picker/picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Background from "../../components/Background";
import { signupDriver } from "../../services/authService";

const DriverSignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleType, setVehicleType] = useState("Motorcycle"); // Default to 'Motorcycle'
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    try {
      const { driverId, error } = await signupDriver({
        fullName,
        email,
        password,
        phone,
        vehicleType
      });

      if (error) throw new Error(error);

      Alert.alert("Success", "Check your email for verification!");
      navigation.navigate("DriverSignInScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Background>
      <View className="flex-1">
        <Header title="Want to drive for us?" type="back" />
        <View className="p-8 mt-3 items-center">
          <Text className="text-2xl justify-center items-center text-neutral-500">
            Register as a driver and start earning
          </Text>
        </View>
        <View className="mt-8">
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
            className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
          />
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
            placeholder="+38795123567"
            className="border border-neutral-300 mb-8 mx-5 rounded-lg h-10 p-2"
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            className="border border-neutral-300 mb-2 mx-5 rounded-lg h-10 p-2"
          />
          <Picker
            selectedValue={vehicleType}
            onValueChange={(itemValue, itemIndex) => setVehicleType(itemValue)}
            style={{width: '100%', height: 50}}
          >
            <Picker.Item label="Motorcycle" value="Motorcycle" />
            <Picker.Item label="Bike" value="Bike" />
            <Picker.Item label="Car" value="Car" />
          </Picker>
          <View className="border mx-5 border-neutral-300 flex-row justify-between items-center mb-5 rounded-lg">
            <Animatable.View>
              <AntDesign name="lock1" size={24} color="black" />
            </Animatable.View>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              className="flex-1 h-10 mx-3"
            />
            <TouchableOpacity onPress={toggleShowPassword}>
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
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
          <Text className="text-sm text-neutral-400">Already drive for us?</Text>
          <Pressable onPress={() => navigation.navigate("DriverSignInScreen")}>
            <Text className="font-bold underline">Sign In</Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
};

export default DriverSignUpScreen;
