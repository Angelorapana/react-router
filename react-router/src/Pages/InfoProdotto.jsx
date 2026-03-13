import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DettaglioProdotto() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((error) => alert("Errore caricamento informazioni prodotto"));
    }, []);

    return (
        <>
            <div className="container mt-5">
                <h1 className="mb-4">{product?.title}</h1>
                {product && (
                    <div className="card p-4 text-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ height: "250px", objectFit: "contain" }}
                        />
                        <h3 className="mt-3">{product.price} €</h3>
                        <p className="mt-3">{product.description}</p>
                    </div>)}
            </div>
        </>);
}

export default DettaglioProdotto;