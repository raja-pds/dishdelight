import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/HomeNavbar';
import About from './components/About';

 // Make sure the path is correct

function App() {
  return (
       <BrowserRouter>
       <HomeNavbar/>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
