import React from 'react';
import { useParams} from "react-router-dom";
import { useAppSelector} from "../../app/hooks";
import {categories, RequestData, selectRequestById} from "../../entities/request";
import Table from 'react-bootstrap/Table';
import EditRequestPopUp from "../../features/edit-request/EditRequestPopUp";
import DeleteRequest from "../../features/delete-request/DeleteRequest";

const RequestDetails = () => {

    const {id} = useParams();
    const request = useAppSelector(selectRequestById(id || ''));

    return (request ?
            <div style={{ width: '800px' }}>
                <h1>Детальная страница заявки</h1>
                <div>
                    <EditRequestPopUp {...request} />
                    <DeleteRequest request={request} />
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