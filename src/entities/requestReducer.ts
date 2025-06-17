export enum REQUEST_ACTIONS  {
    ADD_REQUEST = 'ADD-REQUEST',
    EDIT_REQUEST = 'EDIT-REQUEST',
    DELETE_REQUEST = 'DELETE-REQUEST'
}

const initialState = {
    requests: [
        {
            id: 1, title: 'Тестовая заявка', creationDate: new Date(),
            description: 'Эта заявка на получение нового телефона домафона', category: 12,
        },
        {
            id: 2, title: 'Тестовая заявка2', creationDate: new Date(),
            description: 'Эта заявка 2', category: 1,
        },
    ]
}

export interface RequestData {
    id?: string,
    title: string,
    description: string,
    category: string
}

export interface ActionData extends RequestData {
    type: REQUEST_ACTIONS
}

// export interface actionInterface
export const requestReducer = (state = initialState, action: ActionData) => {
    switch (action.type) {
        case REQUEST_ACTIONS.ADD_REQUEST:
            const id = `id-${Date.now()}`;
            return {
                ...state,
                requests: [...state.requests,
                    { id: id,
                        title: action.title,
                        description: action.description,
                        category: action.category,
                        creationDate: new Date()
                    }],
            };
        case REQUEST_ACTIONS.EDIT_REQUEST:
            return {
                ...state,
                requests: [...state.requests,
                    { id: action.id,
                        title: action.title,
                        description: action.description,
                        category: action.category,
                        creationDate: new Date()
                    }],
            };
        default:
            return state;
    }
}

export const addRequestActionCreactor = (request: RequestData) =>
    ({ type: REQUEST_ACTIONS.ADD_REQUEST, ...request })

export const editRequestActionCreactor = (request: RequestData ) =>
    ({ type: REQUEST_ACTIONS.EDIT_REQUEST, ...request})
