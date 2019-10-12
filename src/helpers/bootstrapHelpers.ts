import { authBootstrap } from "./authHelpers";
import { NavigationSwitchProp } from "react-navigation";
import { localeBootstrap } from "./localeHelpers";

export const bootstrapApp = async (navigation: NavigationSwitchProp) => {
  await localeBootstrap();
  await authBootstrap(navigation);
};
