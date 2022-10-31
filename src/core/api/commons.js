import ENV from '@config'
import { decodeHash, hashDecrypt } from '@utils/Helpers';

export const DEFAULT_HEADERS = {
  headers: new Headers({
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }),
};

export const DEFAULT_HEADERS_SSL = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
};

export const apiPeticionExitosa = async response => {
  //if(__DEV__) console.log(`${response.status}:${response.url}`)
  //console.log("Respuesta servicio login api", response);
  console.log("Peticion exitosa: ", response)
  if(response.status === 200) return response
  else if(response.status === 400) throw await response.json()
  else throw response;
};


export const apiErrorHandler = async (response) => {
  if (response.result) throw await { codigo: response.statusCode, mensaje: response.result };
  else if (response.results) throw await { codigo: response.statusCode, mensaje: response.results };
  else throw { codigo: response.statusCode, mensaje: `Compruebe su conexión a internet e intente nuevamente.` };
};


