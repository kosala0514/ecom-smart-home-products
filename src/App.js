import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Navbar from './components/Navbar';
import Products from './pages/products';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>
  );
}

export default App;
