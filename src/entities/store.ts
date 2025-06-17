import { combineReducers, createStore } from 'redux'
// import { requestReducer } from "./requestReducer";
import  requestReducer  from "../features/requests/requestsSlice";

import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/requestSlice';


// export const reducers = combineReducers({
//     requestsPage : requestReducer,
// })
// const store = createStore(reducers);
// export default store;
//


// ---------------------------------------------------------------------------------------------

export const store = configureStore({
    reducer: combineReducers({
        requestsPage : requestReducer,
    })
});

// Типы для правильной работы TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;