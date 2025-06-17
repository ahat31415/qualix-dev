import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {deleteRequest, RequestData} from "../features/requests/requestsSlice";

const AllRequests = () => {
    // Типизированный useSelector
    const requests = useAppSelector((state) => state.requestsPage.requests);
    const dispatch = useAppDispatch();
    // const requests = useSelector(state => {
    //     return state.requestsPage.requests;
    // });
    const onDeleting = (request: RequestData) => {
        dispatch(deleteRequest(request));
    }
    const elements = requests.map((request) => {
        return <div key={request.id}>
                <div>Название</div> <div><Link to={`/requests/${request.id}`}>{ request.title }</Link></div>
                <div>Описание</div> <div>{ request.description }</div>
                <div>Категория</div> <div>{ request.category }</div>
                <div>Удалить</div> <div><button onClick={()=>{onDeleting(request)}}>Удалить</button></div>
                <br/>
               </div>
})
    return (
        <div>
            <h1>Все заявки</h1>
            { elements }
        </div>
    );
};

export default AllRequests;