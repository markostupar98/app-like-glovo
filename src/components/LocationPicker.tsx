// components/LocationPicker.tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationPicker = ({ onSave }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapPress = (event) => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleSaveLocation = () => {
    if (selectedLocation) {
      onSave(selectedLocation);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 44.7722,
          longitude: 17.1910,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <Button title="Save Location" onPress={handleSaveLocation} />
    </View>
  );
};

export default LocationPicker;
