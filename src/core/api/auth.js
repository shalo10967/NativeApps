import {
  URL_API_USUARIOS_LOGIN,
  URL_API_USUARIOS_CERRAR_SESION,
} from './endpoints'

import {
  DEFAULT_HEADERS,
  DEFAULT_HEADERS_SSL,
  CONFIG_SSL,
  apiPeticionExitosa,
  apiErrorHandler
} from './commons';
import { userAuthToken } from '@config';

export const apiAuthLogin = async params => {

  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return await fetch(URL_API_USUARIOS_LOGIN,
    {
      method: "POST",
      headers: {
        ...DEFAULT_HEADERS_SSL.headers,
        //Authorization: userToken
      },
      body: formBody,
    }
  )
    .then((res) => res.ok ? res.text() : res.json())
    .then(apiPeticionExitosa)
    .catch(apiErrorHandler);
}



export const apiAuthCerrarSesion = async datos => {
  const userToken = await userAuthToken();
  return await fetch(
    URL_API_USUARIOS_CERRAR_SESION(datos),
    {
      method: "POST", body: JSON.stringify({}),
      ...CONFIG_SSL,
      headers: {
        ...DEFAULT_HEADERS_SSL.headers,
        Authorization: userToken
      }
    }
  )
    .then(apiPeticionExitosa)
    .catch(apiErrorHandler);
}