import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h4>This is your Category Details has</h4>
            <h5>Selected Category: {category}</h5>
        </div>
    );
};

export default CategoryDetails;