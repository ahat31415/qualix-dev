import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {deleteRequest, editRequest, RequestData, categories} from "../features/requests/requestsSlice";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import EditRequestPopUpModal from "../widgets/EditRequestPopUpModal";

const RequestDetails = () => {
    const dispatch = useAppDispatch();
    const onDeleting = (request: RequestData) => {
        dispatch(deleteRequest(request));
        navigate(`/requests`, {replace: false});
    }
    const navigate = useNavigate();
    const {id} = useParams();
    const formActionCallback = (request: RequestData) => {
        dispatch(editRequest({id, ...request}));
        navigate('/requests', {replace: true});
    }
    const request = useAppSelector(state => {
        return state.requestsPage.requests.find((el) => el.id == id)
    });

    return (request ?
            <div style={{ width: '800px' }}>
                <h1>Детальная страница заявки</h1>
                <div>
                    <EditRequestPopUpModal {...request} />
                    <Button onClick={() => onDeleting(request)} variant="outline-danger">Удалить заявку</Button>
                </div>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Заголовок</th>
                        <th>Описание</th>
                        <th>Категория</th>
                        <th>Дата создания</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key={request.id}>
                        <td>{request.title}</td>
                        <td>{request.description}</td>
                        <td>{categories[request.category]}</td>
                        <td>{request.creationDate.split('T')[0]}</td>

                    </tr>
                    </tbody>
                </Table>
            </div> : <div>Неправильная ссылка - заявка не найдена</div>
    );
};

export default RequestDetails;