import Image from "next/image";
import styles from "../components/card.module.scss";


export interface ProductProps {
    id: number,
    image: string,
    name: string,
    price: number,
    rating: number
}


export default function Card({produtos}: {produtos: ProductProps[]}) {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>PRODUTOS</div>
            <div >
                <div className={styles.card}>
                    {produtos.map((produto) => (
                        <div key={produto.id} className={styles.product}>
                            <img src={produto.image} alt={produto.name} />
                            <h3 className={styles.name}>{produto.name}</h3>
                            <div className={styles.productStats}>
                                <p className={styles.rating}>Nota: {produto.rating}</p>
                                <p className={styles.price}> R$ {produto.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
    )
}