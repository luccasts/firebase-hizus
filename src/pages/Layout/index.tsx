import { Outlet } from "react-router-dom";

import "./index.css";

import ProductsProvider from "../../context/Products";
import Nav from "../../components/Nav";
import FormProvider from "../../context/Form";
import { Footer } from "../../components/Footer";
export const Layout = () => {
  return (
    <FormProvider>
      <div className="container-flex">
        <ProductsProvider>
          <Nav />
          <Outlet />
        </ProductsProvider>
        <Footer />
      </div>
    </FormProvider>
  );
};
