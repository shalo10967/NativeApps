import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from "redux-persist";
import createSensitiveStorage from "redux-persist-sensitive-storage";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { decodeHash, hashDecrypt } from '@utils/Helpers';

import rootSaga from '@core/sagas';
import reducersApp from '@core/reducers'

// Thunk Middleware
const thunkMiddleware = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//     thunkMiddleware.push(createLogger());
// }

const SHARED_PREFERENCES_NAME = 'FKAuM2IhVmMzAGExZGtjYGxkLwVgAQWzAF05BQZkYJZ5MGRlZwIzMTLmMvAmMJ5mnKEcqzH=';
const KEY_CHAIN_SERVICE = 'F2I5D2uunJ4wMTAyMwH4AzRgZwDmZl00LzEyYGx2L2ZgLmqvMwx2LGAuLGL3V0ymLJqyot==';

const SensitiveStorage = createSensitiveStorage({
    sharedPreferencesName: decodeHash(hashDecrypt(SHARED_PREFERENCES_NAME)),
    keychainService: decodeHash(hashDecrypt(KEY_CHAIN_SERVICE))
});

const securePersistConfig = {
    // Secure
    key: 'Secure',
    // Storage Method (React Native)
    storage: SensitiveStorage,
    whitelist: ['storage'],
    // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
    timeout: null,
};

const reducers = persistCombineReducers(securePersistConfig, reducersApp);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(...thunkMiddleware, sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
