import { useState, useEffect, use } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Prodotti() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((error) => alert("Errore caricamento prodotti"));

    }, []);
    return (

        <div className="container mt-5">
            <h1 className="mb-4 text-center">Prodotti</h1>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-4 mb-4">
                        <div className="card h-100 text-center p-3">
                            <img src={product.image}
                                className="card-img-top"
                                alt={product.title}
                                style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {product.title}
                                </h6>
                                <p className="card-text fw-bold">
                                    {product.price} €
                                </p>
                                <Link to={`/prodotti/${product.id}`}>Scopri prodotto</Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Prodotti;