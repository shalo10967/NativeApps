

import ENV from '@config'

import { stateApis } from '@config'

export const { URL_API } = ENV()

const URL_API_USUARIOS = `${URL_API}`;
export const URL_API_USUARIOS_LOGIN = `${URL_API}/usuario`;
export const URL_API_SINIESTROS = `${URL_API}/siniestro`;
export const URL_API_SINIESTROS_CREAR = `${URL_API}/siniestro_crear`;

export const URL_API_USUARIOS_CERRAR_SESION = ({idRegistro}) => {
  return `${URL_API_USUARIOS}/Usuario/${idRegistro}/CerrarSesion`
};