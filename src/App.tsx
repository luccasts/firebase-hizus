import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Product } from './pages/product';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
  );
}

export default App;
