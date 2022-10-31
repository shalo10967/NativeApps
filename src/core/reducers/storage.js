import CONSTANTES from '../store/CONSTANTES';

const DEFAULT_STATE = { }

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CONSTANTES.STORAGE_SET_ITEM:
        let data = {};
        data[action.payload.key] = action.payload.value;

        return { ...state, ...data};
    case CONSTANTES.STORAGE_DELETE_ITEM:
        let _state = state;
        delete _state[action.payload];

        return { ..._state };
    case CONSTANTES.STORAGE_CLEAR:
        return DEFAULT_STATE;
    default:
        return state;
  }
};
