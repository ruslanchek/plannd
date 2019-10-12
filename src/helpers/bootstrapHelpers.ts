import { authBootstrap } from './authHelpers';
import { NavigationSwitchProp } from 'react-navigation';
import { localeBootstrap } from './localeHelpers';

export const bootstrapPreApp = async (navigation: NavigationSwitchProp) => {
  await localeBootstrap();
  await authBootstrap(navigation);
};

export const bootstrapApp = async (navigation: NavigationSwitchProp) => {
  await localeBootstrap();
  await authBootstrap(navigation);
};
