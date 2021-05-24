const ACCESS_TOKEN = 'access_token';
const LANGUAGE = 'language';

export const getToken = () => window.localStorage.getItem(ACCESS_TOKEN);

export const setToken = (token) => window.localStorage.setItem(ACCESS_TOKEN, token);

export const removeToken = () => window.localStorage.removeItem(ACCESS_TOKEN);

export const getLanguage = () => window.localStorage.getItem(LANGUAGE);

export const setLanguage = (language) => window.localStorage.setItem(LANGUAGE, language);
