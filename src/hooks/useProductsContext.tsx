import {    useContext, useEffect, useState } from "react"
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore"
import { produtosCollection } from "../lib/controller"
import { ProductsContext } from "../context/Products"



interface IProdutos {
    description: string,
    discountValue: string, 
    id: string, 
    imgItem1: string, 
    imgMain: string, 
    perifericos: string, 
    title: string, 
    type: string, 
    value: string,
}

interface IProdutosState {
    id: string
}

const useProductsContext = () => {
    const { produtos , setSearch  } = useContext(ProductsContext)
    

 

    function handleSearchProducts(v: string) {
        if (produtos) {
            const filteredProducts  = produtos.filter((p) => p.title.toLocaleLowerCase().indexOf(v.toLocaleLowerCase()) > -1)
            return filteredProducts
        }

    }

    



    return {
        handleSearchProducts,
    }
}

export default useProductsContext;
