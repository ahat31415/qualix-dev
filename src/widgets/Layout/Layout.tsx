import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Layout.module.css'
const Layout = () => {
    const {layoutContainer, layoutNavBarWidth} = s;
    return (
        <div className={layoutContainer}>
            <Container fluid>
                <Row>
                    <Col xs={3} md={2} className={`${layoutNavBarWidth} px-0`} ><Navbar /></Col>
                    <Col md="auto"><Outlet /></Col>
                </Row>
            </Container>
        </div>

    );
};

export default Layout;