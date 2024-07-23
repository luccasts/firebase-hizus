
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import {createContext, useEffect, useState } from "react";
import { produtosCollection } from "../lib/controller";

export const ProductsContext = createContext(null)
ProductsContext.displayName = "Produtos"


const ProductsProvider = ({children}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [produtos, setProdutos]:any = useState() 
    const [search, setSearch]:any = useState([])  
    useEffect(() => {
        onSnapshot(produtosCollection,
            (snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
                setProdutos(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                );
            })
    }, [])    
    return (
        <ProductsContext.Provider  value={{ produtos, setProdutos, search, setSearch}}>
                    {children}
        </ProductsContext.Provider>
      
    )
}

export default ProductsProvider;