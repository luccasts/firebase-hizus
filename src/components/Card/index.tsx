import "./Card.css"
import { useEffect, useState } from "react"
import { produtosCollection } from "../../lib/controller"
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore"
import { IProdutos } from "../../types/produtos"
import Information from "../Information"


export const Card = () => {
    const [produtos, setProdutos] = useState<IProdutos[]>([])
    useEffect(() => onSnapshot(produtosCollection,
        (snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
            setProdutos(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            );
        }),
        []
    )
    return (
        <>
            <div>
                {produtos && produtos.length ? (
                    <div>
                        {
                            produtos?.map((produto) => (
                                <Information key={produto.id} produto={produto} />
                            ))
                        }
                    </div>
                ) : (
                        <div className="loading-div"> <span className="loading"></span></div>
                    )
                }
            </div>
        </>

    )
}
