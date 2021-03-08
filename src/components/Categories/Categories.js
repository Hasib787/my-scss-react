import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [
    {name:'Lenevo', category:'laptop'},{name:'Asus', category:'laptop'},{name:'Hp', category:'laptop'},
    {name:'Nokia', category:'mobile'},{name:'Samsung', category:'mobile'},{name:'Realme', category:'mobile'},
    {name:'Canon', category:'camera'},{name:'Nikon', category:'camera'},{name:'Sony', category:'camera'}
]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        const matchedProducts = allProducts.filter(pd => pd.category ===  category.toLowerCase());
        setProduct(matchedProducts);
    },[category])
    
    return (
        <div>
            <h3>Select your category: {category}</h3>
            {
                product.map(pd=> <CategoryDetails product ={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;