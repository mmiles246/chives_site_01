import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import EnterSite from './components/EnterSite';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';


function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
            {/* <Route index element={<Home />} /> */}
            <Route path='services' element={<Services />} />
        </Routes>
      </>
  );
}

export default App;
