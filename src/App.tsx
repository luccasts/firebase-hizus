import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/produtos/:id" element={<Details />} />
          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
} 

export default App;
