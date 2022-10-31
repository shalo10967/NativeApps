import { actionStorageSetItem, actionStorageDeleteItem, actionStorageClear } from "../../core/store/ACCIONES";
import { store } from "../../core/store";

class SecureStorage {
    static getAllItems = () => {
        return new Promise ((resolve) => {
            const globalState = store.getState();

            resolve(globalState.storage);
        });
    }

    static getItem = (key) => {
        return new Promise ((resolve) => {
            const globalState = store.getState();

            if (globalState.storage[key] !== undefined && globalState.storage[key] !== null) {
                resolve(globalState.storage[key]);
            } else {
                resolve(null)
            }
        });
    }

    static setItem = (key, value) => {
        return new Promise (async (resolve) => {
            await store.dispatch(actionStorageSetItem(key, value));

            resolve();
        });
    }

    static deleteItem = (key) => {
        return new Promise (async (resolve) => {
            await store.dispatch(actionStorageDeleteItem(key));

            resolve();
        });
    }

    static clear = () => {
        return new Promise (async (resolve) => {
            await store.dispatch(actionStorageClear());

            resolve();
        });
    }
}

export default SecureStorage