import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../features/Navbar";

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;