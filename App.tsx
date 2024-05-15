import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      <Header title='App' />
    </View>
  );
}

