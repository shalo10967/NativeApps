//import Constants from 'expo-constants';
import { store } from '../core/store';
import { decodeHash, hashDecrypt } from '@utils/Helpers';

export const userAuthToken = () => {
  return store.getState().reducerSesion.usuario.token;
};

export const APK_SAVE = decodeHash(hashDecrypt('DHy6LIA5DxuEo3ufLxRgLHggGGy4HwHkpmIOAKA5p29uK2yBM253'));

export const VERSION_NUMBER = "1.0"
export const VERSION = 'Versión' + " " + VERSION_NUMBER;

const ENV = {
  dev: {
    TOKEN_AUTH: "nativeapps_siniestros",
    URL_API: "async_storage_navapps",
    API_MANAGEMENT_KEY: "",
    TIEMPO_VERIFICACION_NOTIFICACION_NUEVA: 1000 * 20, // 20 segundos,
    API_SSL_RESULT: ""
  },
  qa: {
    TOKEN_AUTH: "nativeapps_siniestros",
    URL_API: "async_storage_navapps",
    API_MANAGEMENT_KEY: "",
    TIEMPO_VERIFICACION_NOTIFICACION_NUEVA: 1000 * 20, // 20 segundos
    API_SSL_RESULT: ""
  },
  prod: {
    TOKEN_AUTH: "nativeapps_siniestros",
    URL_API: "async_storage_navapps",
    API_MANAGEMENT_KEY: "",
    TIEMPO_VERIFICACION_NOTIFICACION_NUEVA: 1000 * 60 * 1, // 1 minuto
    API_SSL_RESULT: ""
  }
};

export default (env = 'prod') => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.

  if (env === 'prod') {
    return ENV.prod;
  } else if (env === 'dev') {
    // if (__DEV__) {
    return ENV.dev;
  } else if (env === 'qa') {
    // if (__DEV__) {
    return ENV.qa;
  }

};
