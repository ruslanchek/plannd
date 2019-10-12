import { authBootstrap } from './authHelpers';
import { NavigationSwitchProp } from 'react-navigation';

export const bootstrapApp = async (navigation: NavigationSwitchProp) => {
  await authBootstrap(navigation);
};
