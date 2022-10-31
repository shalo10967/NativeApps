
import CONSTANTES from './../store/CONSTANTES';

const DEFAULT_STATE = {
  data: [],
  waiting: false,
  error: '',
  apiRespuesta: false,
  errordata: "",
  estado: '',
  apiError: null,
  dataCrear: {},
  dataActualizar: {},
}

export default (state = DEFAULT_STATE, action) => {
  console.log("Actions: ", action)
  switch (action.type) {
    case CONSTANTES.SINIESTROS_LISTA_OBTENER:
      return { ...state, error: "", waiting: true, error: '', apiError: null };
    case CONSTANTES.SINIESTROS_LISTA_RECIBE:
      return { ...state, data: action.data ? action.data : [], waiting: false, error: '', apiError: null };

    case CONSTANTES.SINIESTROS_CREAR:
      return {
        ...state,
        estado: "",
        dataCrear: {},
        apiRespuesta: true,
        waiting: true,
        error: '',
        apiError: null
      };
    case CONSTANTES.SINIESTROS_CREADO:
      return {
        ...state,
        dataCrear: action.data,
        estado: "CREADO",
        apiRespuesta: true,
        waiting: false,
        error: '',
        apiError: null
      };

    case CONSTANTES.SINIESTROS_ACTUALIZAR:
      return {
        ...state,
        estado: "",
        dataActualizar: {},
        apiRespuesta: true,
        waiting: true,
        error: '',
        apiError: null
      };
    case CONSTANTES.SINIESTROS_ACTUALIZADO:
      return {
        ...state,
        dataActualizar: action.data,
        estado: "ACTUALIZADO",
        apiRespuesta: true,
        waiting: false,
        error: '',
        apiError: null
      };

    case CONSTANTES.LIMPIAR_ESTADO:
      return {
        ...state,
        data: [],
        dataCrear: {},
        dataActualizar: {},
        
        apiRespuesta: false,
        error: '',
        apiError: null
      };

    case CONSTANTES.LIMPIAR_ESTADO_DESMONTAR:
      return {
        ...state,
        data: [],
        dataCrear: {},
        dataActualizar: {},
        
        error: '',
        apiRespuesta: false,
        estado: '',
        enviandodata: "",
        apiError: null
      };

    case CONSTANTES.API_ERROR_RESPUESTA:
      return {
        ...state,
        waiting: false,
        error: action.error ? (`${(action.error.mensaje ? action.error.mensaje : 'Se ha producido un error inesperado, revisa la conexión de red.')
          ||
          (action.error.mensaje ? action.error.mensaje : 'Se ha producido un error inesperado, revisa la conexión de red.')
          }`) : 'API Error.',
        apiError: action.error,
        mensaje: action.error ? (`${action.error.mensaje || action.error.mensaje}`) : 'API Error.',
        estado: 'ERROR',
        actualizar: true,
        apiRespuesta: true
      };
    default:
      return state;
  }
};
