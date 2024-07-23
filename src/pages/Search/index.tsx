import useProductsContext from "../../hooks/useProductsContext";
import { useLocation} from "react-router-dom";
import Information from "../../components/Information";

const SearchPage = () => {
    const {pathname} = useLocation() 
    const pathnameSlice = pathname.slice(7)
    const {handleSearchProducts} = useProductsContext()
    const productsSearch = handleSearchProducts(pathnameSlice)

    return (
        <div>
            {productsSearch && <div> {productsSearch.map((t) => <Information key={t.id} produto={t} />)} </div>}
          TESTE, PÁGINA DE BUSCA
       
        </div>
    )
}




export default SearchPage;