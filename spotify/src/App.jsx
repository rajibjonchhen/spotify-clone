import React, {useState} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MyLayout from './components/myLayout/MyLayout';
function App() {
  return (
    <div className="App">
      <MyLayout/>
      <Home/>
    </div>
  );
}

export default App;
