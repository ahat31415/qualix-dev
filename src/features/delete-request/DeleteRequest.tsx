import { useNavigate } from "react-router-dom";
import React from 'react';
import { useAppDispatch } from "../../app/hooks";
import { deleteRequest, RequestData } from "../../entities/request";
import Button from 'react-bootstrap/Button';

interface DeleteRequestProps {
    request: RequestData;
}

const DeleteRequest = ({ request }: DeleteRequestProps ) => {
    const dispatch = useAppDispatch();
    const onDeleting = (request: RequestData) => {
        dispatch(deleteRequest(request));
        navigate(`/requests`, {replace: false});
    }
    const navigate = useNavigate();
    return (<Button onClick={() => onDeleting(request)} variant="outline-danger">Удалить заявку</Button>)
};

export default DeleteRequest;