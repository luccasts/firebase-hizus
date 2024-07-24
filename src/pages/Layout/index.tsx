import { Outlet } from "react-router-dom"

import "./index.css"

import ProductsProvider from "../../context/Products"
import Nav from "../../components/Nav"
import FormProvider from "../../context/Form"

export const Layout = () => {

    
    return (
        <FormProvider>


            <ProductsProvider>
            <Nav handleSearch={undefined}/>
            
                <Outlet />

            </ProductsProvider>
        </FormProvider>
    )
}