import { getContext, setContext } from "svelte";

class NavStateManager {
  open = $state(false);

  setState = (state: boolean) => {
    this.open = state;
  };

  toggle = () => {
    this.open = !this.open;
  };
}

const APP_NAV_STATE_KEY = "$_app_nav_state";

export function getAppNavState(key = APP_NAV_STATE_KEY) {
  const manager = getContext<NavStateManager>(key);
  if (!manager) {
    return setAppNavState(key);
  }
  return manager;
}

export function setAppNavState(key = APP_NAV_STATE_KEY) {
  const navStateManager = new NavStateManager();
  return setContext(key, navStateManager);
}
