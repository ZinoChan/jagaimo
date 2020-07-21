import { createStore, applyMiddleware, compose } from "redux";
import { persistStore , persistCombineReducers}  from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers';
import logger from "redux-logger";


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile', 'cart', 'user']
}




export default () => {
    const store = createStore(
        persistCombineReducers(persistConfig, rootReducer),
        compose(applyMiddleware(sagaMiddleware, logger))
    );

    const  persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor};
}