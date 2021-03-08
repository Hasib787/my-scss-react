import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is your Category Details has</h4>
            <h5>Selected Product: {name}</h5>
        </div>
    );
};

export default CategoryDetails;