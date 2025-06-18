import React from 'react';
import logo from '../logo.svg';
import './App.css';
// import { useState } from "react";
// import NavBar from "./components/NavBar/NavBar";
// import Main from "./components/Main/Main";
// import {tempMovieData, tempWatchedData} from "./data.js";
//
// export default function App() {
//   const [movies, setMovies] = useState(tempMovieData);
//
//   return (
//       <>
//         <NavBar movies={movies} />
//         <Main movies={movies} tempWatchedData={tempWatchedData}/>
//       </>
//   );
// }
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AllRequests  from "../pages/AllRequests";
import Layout from "../widgets/Layout/Layout";
import Home from "../pages/Home";
import AddRequest from "../pages/AddRequest";
import RequestDetails from "../pages/RequestDetails";

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