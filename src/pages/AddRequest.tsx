import React from 'react';
import RequestForm from "../widgets/RequestForm";
import {useAppDispatch} from "../app/hooks";
import { addRequest, RequestData } from '../features/requests/requestsSlice';
import {useNavigate} from "react-router-dom";

const AddRequest = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const formActionCallback = (request: RequestData) => {
        dispatch(addRequest(request));
        navigate('/requests', {replace: true});
    }
    return (
        <div>
            <h1>Создание заявки</h1>
            <RequestForm formActionCallback={ formActionCallback }/>
        </div>
    );
};

export default AddRequest;