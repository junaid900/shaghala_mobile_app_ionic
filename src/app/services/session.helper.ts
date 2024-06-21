import { addUser, loadUser, removeUser } from "../store/user/user.action";
import { convertFromBase64, convertToBase64 } from "./constrant.helper";
import { GlobalProvider } from "./global.provider";
import { StoreService } from "./store.service";

const USER = "USER";

export const setUser = (data) => {
  var val = convertToBase64(JSON.stringify(data));
  let res = localStorage.setItem(USER, val);
  // new StoreService().changeUser(data);
  // addUser({content: data});
  return true;
}
export const getUser = () => {
  try {
    var user = JSON.parse(convertFromBase64(localStorage.getItem(USER)));
    if (user) {
      // new StoreService().changeUser(user);
      return user;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}
export const isLogin = () => {
  try {
    var user = convertFromBase64(localStorage.getItem(USER));
    var userTkn = JSON.parse(user).session_id;
    if (!user && user.length < 1) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    return false;
  }
}

export const logout = () => {
  try {
    localStorage.removeItem(USER);
    removeUser();
    // new StoreService().changeUser({});
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
