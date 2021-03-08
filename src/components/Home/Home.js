import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{border: '1px solid purple', margin: '10px', padding: '10px'}}>
            <h1>This is home: {count}</h1>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;