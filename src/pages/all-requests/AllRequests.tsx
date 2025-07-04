import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import Table from 'react-bootstrap/Table';
import {allRequests} from "../../entities/request";

const AllRequests = () => {
    const requests = useAppSelector(allRequests());
    const elements = requests.map((request) => {
        return <tr key={request.id}>
            <td><Link to={`/requests/${request.id}`}>{request.title}</Link></td>
            <td>{request.creationDate.split('T')[0]}</td>
        </tr>
    })

    const table = <Table striped>
        <thead>
        <tr>
            <th>Заголовок</th>
            <th>Дата создания</th>
        </tr>
        </thead>
        <tbody>
        {elements}
        </tbody>
    </Table>;

    return (
        <div>
            <h1>Список заявок</h1>
            {elements.length === 0 ? <h3>Нет данных</h3> : table}
        </div>
    );
};

export default AllRequests;