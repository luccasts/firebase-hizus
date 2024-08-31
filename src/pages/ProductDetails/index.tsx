import { useParams } from "react-router-dom"
import { firestore } from "../../lib/controller"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { NavBack } from "../../components/NavBack"
import './ProductDetails.css'
import CardDescrition from "./CardDescription"
import CardDetails from "./CardDetails/CardDetails"


export const Details = () => {
    const { id } = useParams()

    const getProduto = doc(firestore, `produtos/${id}`)

    const [isLoading, setIsLoading] = useState(false)
    const [produto, setProduto] = useState({})

    useEffect(() => {
        const fetchProdutoData = async () => {
            setIsLoading(true)
            const docSnap = await getDoc(getProduto)
            if (docSnap.exists()) {
                const newProduto = {
                    id: docSnap.id,
                    ...docSnap.data(),
                }
                setProduto(newProduto)
                setIsLoading(false)
            } else {
                console.log("Não existe este documento!")
            }
        }
        fetchProdutoData()
    }, [])


    if (isLoading) return <div className="loading-div"> <span className="loading"></span></div>
    return (
        <>
            {Object.keys(produto) && Object.keys(produto).length ? (
                <>
                    <main className="wrapper">
                        <section className="section_details">
                            <NavBack/>
                            <CardDetails produto={produto} />
                        </section>
                        <section className="section_details">
                            <CardDescrition  produto={produto}/>   
                        </section>
                    </main>

                </>
            ) : null}

        </>


    )
} 