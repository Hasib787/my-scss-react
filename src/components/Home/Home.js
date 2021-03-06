import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div style={{border: '1px solid purple', margin: '10px', padding: '10px'}}>
            <h1>This is home: {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;