import { Banner } from "../../components/Banner";
import ProductList from "../../components/ProductList";

import "./index.css";

export const Home = () => {
  return (
    <>
      <Banner />
      <main className="wrapper">
        <ProductList title="Mais Vendidos" />
      </main>
    </>
  );
};
