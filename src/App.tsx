import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formpage1 from './pages/Formpage1';
import Sumarry from './pages/Sumarry';
import Mycontext from './contextapi/Mycontext';
function App() {
  return (
    <div className="App">
      <Mycontext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Formpage1 />} />
            <Route path='/summary' element={<Sumarry />} />
          </Routes>
        </BrowserRouter>
      </Mycontext>
    </div>
  );
}

export default App;
