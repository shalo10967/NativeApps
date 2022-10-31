import { takeEvery, call, select, put, all } from './../../../node_modules/redux-saga/effects';
import CONSTANTES from '@core/store/CONSTANTES';
//import Constants from 'expo-constants';
import {Platform } from 'react-native';

import {
  actionAuthLoginExitoso,
  actionAuthLoginError,
  actionAuthRecordarExitoso,
  actionAuthRecordarError,
  actionAuthRegistroExitoso,
  actionAuthRegistroError,
  actionEstablecerSesion,
  actionAuthSesionCerrada
} from '@core/store/ACCIONES';

import {
  apiAuthLogin,
  apiAuthCerrarSesion
} from '@core/api/auth'



function* sagaAuthLogin ({ params }) {
  try {
    const resp = yield call(apiAuthLogin,params);
    yield put(actionAuthLoginExitoso({ isWaiting: false, loginExitoso: true }));
    yield put(actionEstablecerSesion(resp));
  } catch (error) {
    yield put(actionAuthLoginError(error));
  }
}


function* sagaAuthCerrarSesion ({ datos }) {
  try {
    const { reducerSesion } = yield select()
    const resp = yield call(apiAuthCerrarSesion, { idRegistro: reducerSesion.usuario.idRegistro });
    yield put(actionAuthSesionCerrada({ error: null }));
  } catch (error) {
    yield put(actionAuthSesionCerrada({ error: error }));
  }
}

export default [
  takeEvery(CONSTANTES.AUTH_LOGIN, sagaAuthLogin),
  takeEvery(CONSTANTES.AUTH_CERRAR_SESION, sagaAuthCerrarSesion),
]
