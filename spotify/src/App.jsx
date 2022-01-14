import React, {useState} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Artist from './components/artist/Artist'
import Album from './components/album/Album';
import MyLayout from './components/myLayout/MyLayout';
function App() {
  const[search,setSearch] = useState( "")
  
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<MyLayout search={search} setSearch={setSearch}>
          <Home search={search}/>
        </MyLayout>}/>
        <Route path='/Artist/:ArtistId' element={<MyLayout>
          <Artist/>
        </MyLayout>}/>
       
        <Route path='/Album/:AlbumId' element={<MyLayout>
          <Album/>
        </MyLayout>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
