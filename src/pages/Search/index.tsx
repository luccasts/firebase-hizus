import useProductsContext from "../../hooks/useProductsContext";
import { useLocation } from "react-router-dom";
import "./Search.css";
import { IProdutos } from "../../types/produtos";
import ProductInformation from "../../components/Information";

const SearchPage = () => {
  const { pathname } = useLocation();
  const pathnameSlice = pathname.slice(7);
  const { handleSearchProducts } = useProductsContext();
  const productsSearch = handleSearchProducts(pathnameSlice);

  return (
    <main>
      {productsSearch && (
        <ul className="productInformationUl">
          {productsSearch.map((t: IProdutos) => (
            <ProductInformation key={t.id} produto={t} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default SearchPage;
