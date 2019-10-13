import AsyncStorage from '@react-native-community/async-storage';
import { ASYNC_STORAGE_KEYS } from '../common/constants';
import { Routes } from '../common/routes';
import { NavigationSwitchProp } from 'react-navigation';
import auth, { firebase } from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { AccessToken } from 'react-native-fbsdk';

export const authHandleRegister = async (email: string, password: string) => {
  try {
    const result = await auth().createUserWithEmailAndPassword(email, password);
    console.log(result);
  } catch (e) {
    Alert.alert('Register', e.message);
  }
};

export const authHandleLogIn = async (email: string, password: string) => {
  try {
    const result = await auth().signInWithEmailAndPassword(email, password);
    console.log(result);
  } catch (e) {
    Alert.alert('Login', e.message);
  }
};

export const authHandleResetPassword = async (email: string) => {
  try {
    const result = await auth().sendPasswordResetEmail(email);
    console.log(result);
  } catch (e) {
    Alert.alert('Login', e.message);
  }
};

export const authHandleFacebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    const data = await AccessToken.getCurrentAccessToken();
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    const signInData = await firebase.auth().signInWithCredential(credential);
    console.log(result, data, credential, signInData);
  } catch (e) {
    Alert.alert('Facebook', e.message);
  }
};

export const authBootstrap = async (navigation: NavigationSwitchProp) => {
  const userToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
  navigation.navigate(userToken ? Routes.AppStack : Routes.AuthStack);
};

export const authHandleMockLogin = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.USER_TOKEN, '123');
  navigation.navigate(Routes.AppStack);
};

export const authHandleLogOut = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
  navigation.navigate(Routes.AuthStack);
};
