import AsyncStorage from '@react-native-community/async-storage';
import { ASYNC_STORAGE_KEYS } from '../common/constants';
import { Routes } from '../common/routes';
import { NavigationSwitchProp } from 'react-navigation';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const authHandleRegister = async (email: string, password: string) => {
  try {
    const result = await auth().createUserWithEmailAndPassword(email, password);
    console.log(result);
  } catch (e) {
    Alert.alert('Register', e.message);
  }
};

export const authHandleLogin = async (email: string, password: string) => {
  try {
    const result = await auth().signInWithEmailAndPassword(email, password);
    console.log(result);
  } catch (e) {
    Alert.alert('Login', e.message);
  }
};

export const authBootstrap = async (navigation: NavigationSwitchProp) => {
  const userToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
  navigation.navigate(userToken ? Routes.AppStack : Routes.AuthStack);
};

export const authHandleLogIn = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.USER_TOKEN, '123');
  navigation.navigate(Routes.AppStack);
};

export const authHandleLogOut = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
  navigation.navigate(Routes.AuthStack);
};
