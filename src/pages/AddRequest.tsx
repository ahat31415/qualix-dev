import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {addRequestActionCreactor, editRequestActionCreactor, RequestData} from '../entities/requestReducer';
import RequestForm from "../widgets/RequestForm";
import {useAppDispatch} from "../app/hooks";
import { addRequest, RequestData } from '../features/requests/requestsSlice';

const AddRequest = () => {
    const dispatch = useAppDispatch();

    const formActionCallback = (request: RequestData) => {
        dispatch(addRequest(request));
    }
    return (
        <div>
            <h1>Создание новой заявки</h1>
            <RequestForm formActionCallback={ formActionCallback }/>
        </div>
    );
};

export default AddRequest;