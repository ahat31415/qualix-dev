import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    requests: [
        {
            id: 'id-1', title: 'Первая тестовая заявка', creationDate: new Date().toISOString(),
            description: 'Эта заявка на получение нового телефона домафона', category: 0,
        }
    ]
}

export const categories = ['Категория 1', 'Категория 2', 'Категория 3', 'Категория 4' ];

export interface RequestData {
    id?: string,
    title: string,
    description: string,
    category: number
}

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
                    creationDate: new Date().toISOString()
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
                creationDate: new Date().toISOString()
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