import { useState, useEffect } from 'react';
import Products from "api/products.json";
import ProductItem from "components/ui/ProductItem";
import Title from "components/ui/Title";

export default function Favorites() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, []);

    return (
        <div>
            <Title>Favoriler</Title>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-0.1 bg-white rounded overflow-hidden">
                { products.length && products.map((product, index) => <ProductItem key={index} product={product} />)}
            </div>
        </div>
    )
}
