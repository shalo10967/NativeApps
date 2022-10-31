import CONSTANTES from './CONSTANTES';

//Siniestros

export const actionSiniestrosListaObtener = params => ({
    type: CONSTANTES.SINIESTROS_LISTA_OBTENER,
    params
});
export const actionSiniestrosListaRecibe = data => ({
    type: CONSTANTES.SINIESTROS_LISTA_RECIBE,
    data
});

export const actionSiniestrosDetalleObtener = params => ({
    type: CONSTANTES.SINIESTROS_DETALLE_OBTENER,
    params
});
export const actionSiniestrosDetalleRecibe = data => ({
    type: CONSTANTES.SINIESTROS_DETALLE_RECIBE,
    data
});

export const actionSiniestrosCrear = params => ({
    type: CONSTANTES.SINIESTROS_CREAR,
    params
});
export const actionSiniestrosCreado = data => ({
    type: CONSTANTES.SINIESTROS_CREADO,
    data
});

export const actionSiniestrosActualizar = params => ({
    type: CONSTANTES.SINIESTROS_ACTUALIZAR,
    params
});
export const actionSiniestrosActualizado = data => ({
    type: CONSTANTES.SINIESTROS_ACTUALIZADO,
    data
});

// --------------------------------------------------------------------------
export const actionAuthLogin = params => ({ type: CONSTANTES.AUTH_LOGIN, params });
export const actionAuthLoginExitoso = (data) => ({ type: CONSTANTES.AUTH_LOGIN_EXITOSO, data });
export const actionAuthLoginError = error => ({ type: CONSTANTES.AUTH_LOGIN_ERROR, error });

// --------------------------------------------------------------------------
export const actionEstablecerSesion = usuario => ({ type: CONSTANTES.ESTABLERCER_SESION, usuario });

export const actionAuthCerrarSesion = datos => ({ type: CONSTANTES.AUTH_CERRAR_SESION, datos })
export const actionAuthSesionCerrada = error => ({ type: CONSTANTES.AUTH_SESION_CERRADA, error })

// --------------------------------------------------------------------------

export const actionApiErrorRespuesta = error => ({ type: CONSTANTES.API_ERROR_RESPUESTA, error });
export const actionApiSolicitud = () => ({ type: CONSTANTES.API_SOLICITUD, });

export const actionEstablecerTokenExpo = token => ({ type: CONSTANTES.ESTABLERCER_TOKEN_EXPO, token });
export const actionEstablecerSesionID = token => ({ type: CONSTANTES.ESTABLERCER_SESION_ID, token });

export const actionLimpiarEstado = () => ({ type: CONSTANTES.LIMPIAR_ESTADO });
export const actionLimpiarEstadoDesmontar = () => ({ type: CONSTANTES.LIMPIAR_ESTADO_DESMONTAR });
// --------------------------------------------------------------------------
export const actionStorageSetItem = (key, value) => ({ type: CONSTANTES.STORAGE_SET_ITEM, payload: { key, value } });
export const actionStorageDeleteItem = (key) => ({ type: CONSTANTES.STORAGE_DELETE_ITEM, payload: key });
export const actionStorageClear = () => ({ type: CONSTANTES.STORAGE_CLEAR });