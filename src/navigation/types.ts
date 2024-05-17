import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  SignInScreen: undefined;
  // Add other screens here if needed
};

// Type for screen props
export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;
export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

// Type for navigation prop
export type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
export type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignInScreen'>;
