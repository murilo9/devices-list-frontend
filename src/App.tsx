import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  const token = '';
  return <>
    <BrowserRouter>
      <Routes>
        {
          token ?
            <>
              <Route index element={<Main />}></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </>
            :
            <>
              <Route index element={<Login />}></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </>
        }
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
