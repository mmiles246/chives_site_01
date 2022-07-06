import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import EnterSite from './components/EnterSite';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<EnterSite/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
