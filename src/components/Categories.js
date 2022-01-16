import { useState, useEffect } from 'react';
import categoryData from 'api/categories.json';
import Category from "./ui/category";
import Title from "components/ui/Title";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData)
    }, []);

    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <Title>Kategoriler</Title>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10">
                    { categories && categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </div>
        </div>
    )
}
