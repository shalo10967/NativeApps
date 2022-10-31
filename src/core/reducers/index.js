import reducerSiniestros from './siniestros'
import reducerSiniestrosDetalle from './siniestrosDetalle'

import reducerSesion from './sesion';
import reducerLogin from './login';

import apiReducer from './api';
import storage from './storage';

export default {
  reducerSesion,

  reducerSiniestros,
  reducerSiniestrosDetalle,

  reducerLogin,

  apiReducer,
  storage
}

