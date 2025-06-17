import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RequestForm from "../widgets/RequestForm";
import { useParams } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import { editRequest, RequestData } from '../features/requests/requestsSlice';

const EditRequest = () => {
    const { id } = useParams();
    // const dispatch = useDispatch();
    // const formActionCallback = ({title, description, category}) => {
    //     dispatch(editRequestActionCreactor({id, title, description, category}));
    // }
    const dispatch = useAppDispatch();
    const formActionCallback = (request: RequestData) => {
        dispatch(editRequest({id, ...request}));
    }
    const request = useAppSelector(state => {
        return state.requestsPage.requests.find((el)=> el.id == id );
    });

    let requestForm = <div>Заявка не найдена!</div>;
    if (request) {
        const { title, description, category } = request;
        requestForm = <RequestForm title={title} description={description} category={category}
                                   formActionCallback={formActionCallback} />;
    }
    return (
        <div>
            <h1>Редактирование заявки</h1>
            { requestForm }
        </div>
    );
};

export default EditRequest;