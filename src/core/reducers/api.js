import CONSTANTES from './../store/CONSTANTES';

const DEFAULT_STATE = {
    waiting: false,
    error: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case CONSTANTES.API_SOLICITUD:
            return { waiting: true, error: '' };
        case CONSTANTES.API_ERROR_RESPUESTA:
            return {
                waiting: false,
                error: action.error ? (`${(action.error.descripcion ? action.error.descripcion : 'Se ha producido un error inesperado, inténtelo de nuevo.')
                    ||
                    (action.error.mensaje ? action.error.mensaje : 'Se ha producido un error inesperado, inténtelo de nuevo.')
                    }`) : 'API Error.'
            };
        default:
            return state;
    }
};
