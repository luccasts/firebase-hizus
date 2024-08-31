import useProductsContext from "../../hooks/useProductsContext";
import { useLocation} from "react-router-dom";
import Information from "../../components/Information";
import { IProdutos } from "../../types/produtos";

const SearchPage = () => {
    const {pathname} = useLocation() 
    const pathnameSlice = pathname.slice(7)
    const {handleSearchProducts} = useProductsContext()
    const productsSearch = handleSearchProducts(pathnameSlice)

    return (
        <main>
            {productsSearch && <div> {productsSearch.map((t: IProdutos) => <Information key={t.id} produto={t} />)} </div>}
        </main>
    )
}




export default SearchPage;