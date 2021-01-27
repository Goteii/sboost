export interface UserLoginPayload {
  username: string,
  password: string
}

export interface UserRegisterPayload {
  email: string,
  username: string,
  password: string,
  repeatPassword: string
}

export interface UserChangePasswordPayload {
  currentPassword: string,
  newPassword: string,
  repeatNewPassword: string
}

export interface UserRegisterResponse {}

export interface UserChangePasswordResponse {}

export interface UserAuthenticatedResponse {
  id: number,
  username: string,
  role: string,
  email: string,
  tokenString: string
}