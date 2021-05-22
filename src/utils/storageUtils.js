const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getToken = () => window.localStorage.getItem(ACCESS_TOKEN);

export const setToken = (token) => {
  window.localStorage.setItem(ACCESS_TOKEN, token);
};
