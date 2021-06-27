import * as axios from "axios";

const instance = axios.crete({
  withCredentials: true,
  baseURL: `https://google.com`,
  headers: `API-KEY: test`
});

export const authMe = {
  me() {
    return instance.get(`auth/me`);
  },
  logIn(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logOut(){
    return instance.delete(`auth/login`)
  }

}