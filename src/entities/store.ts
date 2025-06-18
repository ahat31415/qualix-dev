import { combineReducers } from 'redux'
import  requestReducer  from "../features/requests/requestsSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: combineReducers({
        requestsPage : requestReducer,
    })
});

// Типы для правильной работы TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;