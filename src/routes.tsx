import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import Peripherals from "./pages/Peripherals";
import Hardware from "./pages/Hardware";
import Test from "./components/Search/test";
import SearchPage from "./pages/Search";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/produtos/:id" element={<Details />} />
          <Route path="/perifericos" element={<Peripherals/>} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/busca/:search" element={<SearchPage />}/>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
  );
} 

export default AppRoutes;
