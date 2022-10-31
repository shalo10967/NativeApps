import { takeEvery, call, select, put, all } from 'redux-saga/effects';
import CONSTANTES from '@core/store/CONSTANTES';

import {
  actionSiniestrosDetalleRecibe,
  actionProyeccionesFacturasRecibe,
  actionProyeccionesRecibe,
  actionApiErrorRespuesta,
  actionApiSolicitud,
  actionProyeccionesEnviado,
  actionApiErrorProyeccionesEnviado
} from '@core/store/ACCIONES';

import {
  apiSiniestros
} from '@core/api/siniestros'

function* sagaSiniestrosDetalle({ params }) {
  try {
    yield put(actionApiSolicitud())
    const resp = yield call(apiSiniestros, params);
    yield put(actionSiniestrosDetalleRecibe(resp));
  } catch (error) {
    yield put(actionApiErrorRespuesta(error));
  }
}

export default [
  takeEvery(CONSTANTES.SINIESTROS_DETALLE_OBTENER, sagaSiniestrosDetalle),
]