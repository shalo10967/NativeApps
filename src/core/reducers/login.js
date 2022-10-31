import CONSTANTES from './../store/CONSTANTES';
import SecureStorage from '../../utils/SecureStorage';

const DEFAULT_STATE = {
  isWaiting: false,
  mensaje: '',
  loginExitoso: false,
  datos2: {},
  estado: '',
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CONSTANTES.AUTH_LOGIN:
      return { isWaiting: true, mensaje: '', loginExitoso: false };
    case CONSTANTES.AUTH_LOGIN_EXITOSO:
      return action.data;

    case CONSTANTES.AUTH_LOGIN_ERROR:
      return {
        ...state,
        loginExitoso: false,
        isWaiting: false,
        mensaje: action.error ? (`${action.error.descripcion || action.error.mensaje}`) : 'API Error.',
        estado: 'ERROR',
        actualizar: true,
        apiRespuesta: true
      };
    case CONSTANTES.LIMPIAR_ESTADO:
      return {
        ...state,

        apiRespuesta: false,
        error: '',
        apiError: null
      };
    default:
      return state;
  };
};
