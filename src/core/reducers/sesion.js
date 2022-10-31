import CONSTANTES from './../store/CONSTANTES';

const DEFAULT_STATE = {
  usuario: null,
  mensaje: '',
  expoToken: '',
  sesionId: '',
  hasError: false,
  cerrando: false
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CONSTANTES.ESTABLERCER_TOKEN_EXPO:
      return {...state, expoToken: action.token };
    case CONSTANTES.ESTABLERCER_SESION_ID:
      return {...state, sesionId: action.token };
    case CONSTANTES.ESTABLERCER_SESION:

      const { usuario } = action
      return {
        ...state,
        usuario: {
        },
        mensaje: '',
        hasError: false
      };
    case CONSTANTES.AUTH_CERRAR_SESION:
      return { ...state, cerrando: true, mensaje: "" }
    case CONSTANTES.AUTH_SESION_CERRADA:
        return { ...state, cerrando: false }
    default:
      return state;
  }
};
