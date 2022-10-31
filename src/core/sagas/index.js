
import { all } from './../../../node_modules/redux-saga/effects';

import sagasAuth from './sagasAuth';

import sagasSiniestros from './sagasSiniestros';
import sagasSiniestrosDetalle from './sagasSiniestrosDetalle';

export default function* rootSaga() {
  yield all([
    ...sagasSiniestros,
    ...sagasSiniestrosDetalle,
    ...sagasAuth,
  ]);
}
