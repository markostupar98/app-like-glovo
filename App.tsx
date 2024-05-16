import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import SignInScreen from './src/screens/auth/SignInScreen';

export default function App() {
  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      <SignInScreen />
    </View>
  );
}

