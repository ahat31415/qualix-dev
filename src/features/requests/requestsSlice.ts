import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum REQUEST_ACTIONS {
    ADD_REQUEST = 'ADD-REQUEST',
    EDIT_REQUEST = 'EDIT-REQUEST',
    DELETE_REQUEST = 'DELETE-REQUEST'
}

const initialState = {
    requests: [
        {
            id: '1', title: 'Тестовая заявка', creationDate: new Date(),
            description: 'Эта заявка на получение нового телефона домафона', category: 0,
        },
        {
            id: '2', title: 'Тестовая заявка2', creationDate: new Date(),
            description: 'Эта заявка на приобретение айфона', category: 0,
        },
    ]
}

export interface RequestData {
    id?: string,
    title: string,
    description: string,
    category: number
}

export interface ActionData extends RequestData {
    type: REQUEST_ACTIONS
}

// incremented: (state) => {
//     state.value += 1;
// },
// decremented: (state) => {
//     state.value -= 1;
// },
// incrementedByAmount: (state, action: PayloadAction<number>) => {
//     state.value += action.payload;
// },
export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        editRequest: (state, action: PayloadAction<RequestData>) => {
            if (action.payload.id) {
                let index =
                    state.requests.findIndex((el) => el.id === action.payload.id);
                state.requests[index] = {
                    id: action.payload.id,
                    title: action.payload.title,
                    description: action.payload.description,
                    category: action.payload.category,
                    creationDate: new Date()
                };
            }

        },
        addRequest: (state, action: PayloadAction<RequestData>) => {
            const id = `id-${Date.now()}`;
            state.requests.push({
                id: id,
                title: action.payload.title,
                description: action.payload.description,
                category: action.payload.category,
                creationDate: new Date()
            });

        },
        deleteRequest: (state, action: PayloadAction<RequestData>) => {
            if (action.payload.id) {
                let index =
                    state.requests.findIndex((el) => el.id === action.payload.id);
                state.requests.splice(index, 1);
            }
        },
    },
});

// Экспортируем actions
export const {addRequest, editRequest, deleteRequest} = requestSlice.actions;

// Экспортируем reducer
export default requestSlice.reducer;