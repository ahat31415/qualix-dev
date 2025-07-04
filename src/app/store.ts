import { combineReducers } from 'redux'
import  requestReducer  from "../entities/request/model/slice";
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['requestsPage'], // Какие слайсы сохранять
};

const rootReducer = combineReducers({
    requestsPage : requestReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof rootReducer>;
type PersistedState = ReturnType<typeof persistedReducer>;
export type AppState = PersistedState; // Используем этот тип вместо RootState
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);