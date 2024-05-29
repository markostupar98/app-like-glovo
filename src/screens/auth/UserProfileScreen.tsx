import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import Header from "../../components/Header";
import MapView, { Marker } from "react-native-maps";
import Background from "../../components/Background";

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  // Get user
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
      } else {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  // Sign out

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      navigation.navigate("SignInScreen");
    }
  };

  if (!user) {
    return (
      <View className="items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  const handleMapPress = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });

    const reverseGeocode = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    if (reverseGeocode.length > 0) {
      setAddress(reverseGeocode[0].address);
    }
  };

  const saveLocation = async () => {
    if (user) {
      const { error } = await supabase
        .from("profiles")
        .update({
          latitude: location.latitude,
          longitude: location.longitude,
          address: address,
        })
        .eq("id", user.id);
      if (error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Success", "Location updated successfully!");
      }
    }
  };
  return (
    <Background> 
    <View className="flex-1">
      <Header title="Profile" type="back" />
      <View className="justify-center items-center p-5">
        <Image
          source={require("../../../assets/deliveryguy.jpeg")}
          className="w-17 h-17 rounded-full"
        />
        <Text className="mt-2 text-base">Full Name: {user.user_metadata.fullName}</Text>
        <Text className="mt-2 text-neutral-500">Email: {user.email}</Text>
        <View className="w-60 h-60 mt-3 ">
          <MapView
            className="flex-1 rounded-2xl"
            mapType="standard"
            onPress={handleMapPress}
            initialRegion={{
              latitude: 44.7722,
              longitude: 17.191,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {location && <Marker coordinate={location} />}
          </MapView>
        </View>

        {address && <Text className="text-extrabold">City: {address}</Text>}

        <Button
          title="Save Location"
          buttonStyle={{
            marginTop:20,
            borderRadius: 30,
            backgroundColor: "rgba(111, 202, 186, 1)",
          }}
          onPress={saveLocation}
        />

        <Button
          title={"Sign Out"}
          buttonStyle={{
            marginTop:10,
            borderRadius: 30,
            backgroundColor: "rgba(111, 202, 186, 1)",
          }}
          onPress={signOut}
        />
      </View>
    </View>
    </Background>
  );
};

export default UserProfileScreen;
