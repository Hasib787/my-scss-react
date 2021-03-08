import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = (props) => {
    const { count } = props;
    return (
        <div>
            <h3>Select your category</h3>
            <CategoryDetails count={count}></CategoryDetails>
        </div>
    );
};

export default Categories;