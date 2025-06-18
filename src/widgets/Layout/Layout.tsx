import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../../features/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Layout.module.css'
const Layout = () => {
    const {layoutContainer} = s;
    return (
        <div className={layoutContainer}>
            <Container fluid>
                <Row>
                    <Col xs={3} md={2} className="px-0" style={{ minWidth: '400px' }}><Navbar /></Col>
                    <Col md="auto"><Outlet /></Col>
                </Row>
            </Container>
        </div>

    );
};

export default Layout;