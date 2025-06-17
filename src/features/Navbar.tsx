import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Домой</Link></li>
                <li><Link to="/requests">Все заявки</Link></li>
                <li><Link to="/requests/new">Добавить заявку</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;