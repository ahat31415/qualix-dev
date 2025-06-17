import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {deleteRequest, RequestData} from "../features/requests/requestsSlice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const AllRequests = () => {

    const requests = useAppSelector((state) => state.requestsPage.requests);
    const dispatch = useAppDispatch();
    const onDeleting = (request: RequestData) => {
        dispatch(deleteRequest(request));
    }
    const navigate = useNavigate();


    const elements = requests.map((request) => {
        return <tr key={request.id}>
            <td>{request.title}</td>
            <td>{request.description}</td>
            <td>{request.category}</td>
            <td>
                <Button onClick={() => {
                    navigate(`/requests/${request.id}`, {replace: false});
                }} variant="outline-primary">Редактировать заявку</Button>
            </td>
            <td>
                <Button onClick={() => {
                    onDeleting(request)
                }} variant="outline-danger">Удалить заявку</Button>
            </td>
        </tr>

    })
    const table = <Table striped>
        <thead>
        <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Изменение</th>
            <th>Удаление</th>
        </tr>
        </thead>
        <tbody>
        {elements}
        </tbody>
    </Table>;
    return (
        <div>
            <h1>Все заявки</h1>
            {elements.length === 0 ? <h3>Нет данных</h3> : table}
        </div>
    );
};

export default AllRequests;