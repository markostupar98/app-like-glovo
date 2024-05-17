import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import SignInScreen from './src/screens/auth/SignInScreen';
import Welcome from './src/screens/auth/Welcome';

export default function App() {
  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      {/* <SignInScreen /> */}
      <Welcome />
    </View>
  );
}

