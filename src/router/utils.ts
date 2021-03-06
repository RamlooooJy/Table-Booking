import {defaultRoutes} from "./defaultRoutes";

/**
*
* Router redirect method
*
* */
export const goTo = (path: string, history: any) => {
  const isExist = defaultRoutes.find(item=>item.path === path)
  isExist && path !== history.location.pathname && history.push(path)
}
