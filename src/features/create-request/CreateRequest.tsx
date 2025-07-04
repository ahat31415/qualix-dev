import React from 'react';
import RequestForm from "../../entities/request/ui/RequestForm";
import {useAppDispatch} from "../../app/hooks";
import { addRequest, RequestData } from '../../entities/request';
import {useNavigate} from "react-router-dom";

const CreateRequest = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const formActionCallback = (request: RequestData) => {
        dispatch(addRequest(request));
        navigate('/requests', {replace: true});
    }
    return (<RequestForm formActionCallback={ formActionCallback }/>);
};

export default CreateRequest;