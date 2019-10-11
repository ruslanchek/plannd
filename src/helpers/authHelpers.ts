import AsyncStorage from "@react-native-community/async-storage";
import { ASYNC_STORAGE_KEYS } from "../common/constants";
import { Routes } from "../common/routes";
import { NavigationSwitchProp } from "react-navigation";

export const authBootstrap = async (navigation: NavigationSwitchProp) => {
  const userToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
  navigation.navigate(userToken ? Routes.AppStack : Routes.AuthStack);
};

export const authHandleLogIn = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.USER_TOKEN, "123");
  navigation.navigate(Routes.AppStack);
};

export const authHandleLogOut = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
  navigation.navigate(Routes.AuthStack);
};
