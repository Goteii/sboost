import { baseInstance } from "../../instance";

import { ApiResult } from "../../models";

import {
  UserAuthenticatedResponse,
  UserLoginPayload,
  UserRegisterPayload,
  UserRegisterResponse,
  UserChangePasswordPayload,
  UserChangePasswordResponse
} from "./models";

const API_ADDRESS = "/User/";

export const login = (user: UserLoginPayload) => {
  return baseInstance.post<
    UserLoginPayload,
    ApiResult<UserAuthenticatedResponse>
  >(`${API_ADDRESS}SignIn`, user);
};

export const registerUser = (user: UserRegisterPayload) => {
  return baseInstance // zmienić na BE typ zwracany
    .post<UserRegisterPayload, ApiResult<UserRegisterResponse>>(
      `${API_ADDRESS}Register`,
      user
    );
};

export const changePassword = (password: UserChangePasswordPayload) => {
  return baseInstance.post<UserChangePasswordPayload, ApiResult<UserChangePasswordResponse>>(
    `${API_ADDRESS}ChangePassword`,
    password
  )
};
