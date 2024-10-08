import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/ProductDetails';
import Peripherals from "./pages/Peripherals";
import Hardware from "./pages/Hardware";

import SearchPage from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserMenu from "./pages/UserMenu";
import Buy from "./pages/Buy";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/produtos/:id" element={<Details />} />
          <Route path="/perifericos" element={<Peripherals />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="busca/:search" element={<SearchPage />} />
        </Route>
        <Route path="/comprar/:id" element={<Buy />} />
        <Route path="/perfil" element={<UserMenu />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
