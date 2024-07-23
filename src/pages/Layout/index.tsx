import { Outlet } from "react-router-dom"

import "./index.css"

import ProductsProvider from "../../context/Products"
import Nav from "../../components/Nav"
import LoginProvider from "../../context/Login"

export const Layout = () => {

    
    return (
        <LoginProvider>


            <ProductsProvider>
            <Nav handleSearch={undefined}/>
            
                <Outlet />

            </ProductsProvider>
        </LoginProvider>
    )
}