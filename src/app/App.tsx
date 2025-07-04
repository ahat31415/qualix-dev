import React from 'react';
import logo from '../logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AllRequests  from "../pages/all-requests/AllRequests";
import Layout from "../widgets/Layout/Layout";
import Home from "../pages/home/Home";
import AddRequest from "../pages/add-request/AddRequest";
import RequestDetails from "../pages/detail-request/RequestDetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="requests" element={ <AllRequests /> } />
          <Route path="/requests/:id" element={ <RequestDetails /> } />
          <Route path="/requests/new" element={< AddRequest />} />
        </Route>
      </Routes>
  );

}

export default App;