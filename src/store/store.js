import { createStore, applyMiddleware} from "redux";
import { persistStore , persistCombineReducers}  from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers';



const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile', 'cart', 'user']
}




export default () => {
    const store = createStore(
        persistCombineReducers(persistConfig, rootReducer),
        applyMiddleware(sagaMiddleware)
    );

    const  persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor};
}