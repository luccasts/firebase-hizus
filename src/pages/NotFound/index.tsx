import { Link } from "react-router-dom"
import "./index.css"
import "./index.css"
export const NotFound = () => {
    return(
        <main id='NotFound'>
           <h1>Página não encontrada</h1>
           <Link to="/">Voltar para página principal</Link>
        </main>
    )
}