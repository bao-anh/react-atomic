const ACCESS_TOKEN = 'access_token';

export const getToken = () => window.localStorage.getItem(ACCESS_TOKEN);

export const setToken = (token) => {
  window.localStorage.setItem(ACCESS_TOKEN, token);
};

export const removeToken = () => {
  window.localStorage.removeItem(ACCESS_TOKEN);
};
