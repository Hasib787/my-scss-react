import React from 'react';

const CategoryDetails = (props) => {
    const {count} = props;
    return (
        <div>
            <p>This is your Category Details has: {count}</p>
        </div>
    );
};

export default CategoryDetails;