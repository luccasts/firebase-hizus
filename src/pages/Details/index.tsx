import { useParams } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { firestore } from "../../lib/controller"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { DetailsCard } from "./DetailsCard/DetailsCard"
import { NavBack } from "../../components/NavBack"
import './Details.css'


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
                            <NavBack />
                            <DetailsCard produto={produto} />
                        </section>
                    </main>
                    <Footer />
                </>
            ) : null}

        </>


    )
} 