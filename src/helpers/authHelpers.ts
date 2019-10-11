import { AsyncStorage } from "react-native";
import { ASYNC_STORAGE_KEYS } from "../common/constants";
import { Routes } from "../common/routes";
import { NavigationSwitchProp } from "react-navigation";

export const authBootstrap = async (navigation: NavigationSwitchProp) => {
  const userToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
  navigation.navigate(userToken ? Routes.AppStack : Routes.AuthStack);
};

export const authHandleLogin = async (navigation: NavigationSwitchProp) => {
  await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.USER_TOKEN, "123");
  navigation.navigate(Routes.AppStack);
};
