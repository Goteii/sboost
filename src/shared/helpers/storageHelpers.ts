export const getLocalStorageToken = () => {
  return localStorage.getItem("cool-jwt");
};

export const setLocalStorageToken = (res: any) => {
  localStorage.setItem("cool-jwt", res.data.result.tokenString);
};

export const setSessionStorageToken = (token: string) => {
  sessionStorage.setItem("cool-jwt", token);
}

export const getSessionStorageToken = () => {
  return sessionStorage.getItem("cool-jwt");
};