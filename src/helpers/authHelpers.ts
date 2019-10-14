import auth, { firebase } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { ASYNC_STORAGE_KEYS } from '../common/constants';
import { Routes } from '../common/routes';
import { NavigationSwitchProp } from 'react-navigation';
import { Alert } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';

let isGoogleAuthConfigured = false;
let currentUid: string | undefined = undefined;

const authorize = async (uid: string, navigation: NavigationSwitchProp) => {
  await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.UID, uid);
  currentUid = uid;
  navigation.navigate(Routes.AppStack);
};

export const getUid = async (): Promise<string | undefined> => {
  if (currentUid) {
    return currentUid;
  }
  currentUid = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.UID);
  return currentUid;
};

export const authHandleRegister = async (
  email: string,
  password: string,
  navigation: NavigationSwitchProp,
) => {
  try {
    const result = await auth().createUserWithEmailAndPassword(email, password);
    await authorize(result.user.uid, navigation);
  } catch (e) {
    Alert.alert('Register', e.message);
  }
};

export const authHandleLogIn = async (
  email: string,
  password: string,
  navigation: NavigationSwitchProp,
) => {
  try {
    const result = await auth().signInWithEmailAndPassword(email, password);
    await authorize(result.user.uid, navigation);
  } catch (e) {
    Alert.alert('Login', e.message);
  }
};

export const authHandleResetPassword = async (email: string) => {
  try {
    const result = await auth().sendPasswordResetEmail(email);
    Alert.alert('Password reset', 'Check your email');
  } catch (e) {
    Alert.alert('Password reset', e.message);
  }
};

export const authHandleFacebookLogin = async (navigation: NavigationSwitchProp) => {
  try {
    await LoginManager.logInWithPermissions(['public_profile', 'email']);
    const data = await AccessToken.getCurrentAccessToken();
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    const signInData = await firebase.auth().signInWithCredential(credential);
    await authorize(signInData.user.uid, navigation);
  } catch (e) {
    Alert.alert('Facebook', e.message);
  }
};

export const authHandleGoogleLogin = async (navigation: NavigationSwitchProp) => {
  try {
    if (!isGoogleAuthConfigured) {
      await GoogleSignin.configure({
        scopes: [],
        webClientId: '786103925332-uhnh4p7u4i07joqlanbc3btjpbkl84t8.apps.googleusercontent.com',
      });

      isGoogleAuthConfigured = true;
    }
    const result = await GoogleSignin.signIn();
    const credential = firebase.auth.GoogleAuthProvider.credential(
      result.idToken,
      result.serverAuthCode,
    );
    const signInData = await firebase.auth().signInWithCredential(credential);
    await authorize(signInData.user.uid, navigation);
  } catch (e) {
    Alert.alert('Google', e.message);
  }
};

export const authHandleAnonimousLogin = async (navigation: NavigationSwitchProp) => {
  const authForDefaultApp = firebase.auth();
  await authorize(authForDefaultApp.currentUser.uid, navigation);
};

export const authBootstrap = async (navigation: NavigationSwitchProp) => {
  const uid = await getUid();
  navigation.navigate(uid ? Routes.AppStack : Routes.AuthStack);
};

export const authHandleLogOut = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.UID);
  currentUid = undefined;
  navigation.navigate(Routes.AuthStack);
};
