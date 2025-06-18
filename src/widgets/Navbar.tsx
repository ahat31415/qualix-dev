import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
const Navbar = () => {
    return (
        <div className="flex-column d-flex justify-content-center" style={{ paddingTop: '40px' }}>
            <ListGroup>
                <ListGroup.Item><Link to="/">Домой</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/requests">Все заявки</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/requests/new">Добавить заявку</Link></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Navbar;