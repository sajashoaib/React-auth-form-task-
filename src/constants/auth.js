export const AUTH_API_PATHS = {
  LOGIN: "users/login",
  SIGNUP: "users/signup",
  ALLUSERS: "users",
  DELETE_USER: "users/",
  USER_PROFILE: "users/profile",
  ADMIN_PROFILE: "users/profile",
};
export const AUTH_ACTIONS = {
  AUTHORIZE: " AUTHORIZE",
  LOGOUT: "LOGOUT",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  GET_PROFILE: "GET_PROFILE",
  LIST_USERS: "LIST_USERS",
  DELETE_USER: "DELETE_USER",
};
export const SIGNUP_INPUTS = [
  {
    label: "name",
    type: "text",
    id: "name",
  },
  {
    label: "email",
    type: "email",
    id: "email",
  },
  {
    label: "password",
    type: "password",
    id: "password",
  },
  {
    label: "repeat Password",
    type: "password",
    id: "rePassword",
  },
];
export const LOGIN_INPUTS = [
  {
    label: "email",
    type: "email",
    id: "email",
  },
  {
    label: "password",
    type: "password",
    id: "password",
  },
];
