import { takeEvery, call, put } from 'redux-saga/effects';
import CONSTANTES from '@core/store/CONSTANTES';

import {
  actionSiniestrosListaRecibe,
  actionSiniestrosCreado,
  actionSiniestrosActualizado,
  actionApiErrorRespuesta,
  actionApiSolicitud} from '@core/store/ACCIONES';

import {
  apiSiniestros,
  apiSiniestrosCrear,
  apiSiniestrosActualizar
} from '@core/api/siniestros'

function* sagaSiniestros({ params }) {
  try {
    yield put(actionApiSolicitud())
    const resp = yield call(apiSiniestros, params);
    console.log("RESP: ", resp)
    yield put(actionSiniestrosListaRecibe(resp));
  } catch (error) {
    yield put(actionApiErrorRespuesta(error));
  }
}

function* sagaSiniestrosCrear({ params }) {
  try {
    yield put(actionApiSolicitud())
    const resp = yield call(apiSiniestrosCrear, params);
    yield put(actionSiniestrosCreado(resp));
  } catch (error) {
    yield put(actionApiErrorRespuesta(error));
  }
}

function* sagaSiniestrosActualizar({ params }) {
  try {
    yield put(actionApiSolicitud())
    const resp = yield call(apiSiniestrosActualizar, params);
    yield put(actionSiniestrosActualizado(resp));
  } catch (error) {
    yield put(actionApiErrorRespuesta(error));
  }
}


export default [
  takeEvery(CONSTANTES.SINIESTROS_LISTA_OBTENER, sagaSiniestros),
  takeEvery(CONSTANTES.SINIESTROS_CREAR, sagaSiniestrosCrear),
  takeEvery(CONSTANTES.SINIESTROS_ACTUALIZAR, sagaSiniestrosActualizar),
]