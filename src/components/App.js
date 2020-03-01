import * as PRODUCTS from '../data/shop-all-new.json';
import React, {useState} from 'react';
import Header from './Header';
import FlexGrid from './FlexGrid';

function App() {
    const [products] = useState(PRODUCTS.groups);

    return (
        <>
            <Header />
            <FlexGrid products={products} />
        </>
    );
}

export default App;
