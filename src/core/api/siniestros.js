import {
  URL_API_SINIESTROS,
} from './endpoints'

import {
  DEFAULT_HEADERS_SSL,
  apiPeticionExitosa,
  apiErrorHandler
} from './commons';
import AsyncStorage from '@react-native-community/async-storage';


export const apiSiniestros = async params => {
  AsyncStorage.getItem(URL_API_SINIESTROS)
    .then((res) => {
      return {
        status: 200,
        mensaje: "Listado",
        data: JSON.parse(res)
      }
    }).then(apiPeticionExitosa)
    .catch(apiErrorHandler)
}


export const apiSiniestrosCrear = async params => {
  console.log("back params", params)
  try {
    const value = await AsyncStorage.getItem(URL_API_SINIESTROS);
    if (value !== null) {
      // We have data!!
      console.log("asyncStorage Siniestros", );
      let newTmpSiniestros = JSON.parse(value);
      newTmpSiniestros.push({...params, id: newTmpSiniestros.length + 1})
      AsyncStorage.setItem(URL_API_SINIESTROS, JSON.stringify(newTmpSiniestros))
      .then((res) => {
        return {
          status: 200,
          mensaje: "Creado",
          data: "Creado"
        }
      })
      .then(apiPeticionExitosa)
      .catch(apiErrorHandler)
    } else {
      const newSiniestro = [{...params, id: 0}];
      AsyncStorage.setItem(URL_API_SINIESTROS, JSON.stringify(newSiniestro))
      .then((res) => {
        return {
          status: 200,
          mensaje: "Creado",
          data: "Creado"
        }
      })
      .then(apiPeticionExitosa)
      .catch(apiErrorHandler)
    }
  } catch (error) {
    //apiErrorHandler
  }
}