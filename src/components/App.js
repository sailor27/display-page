import * as PRODUCTS from '../data/shop-all-new.json';
import {makeStyles, Popover} from '@material-ui/core';
import React, {useState} from 'react';
import Header from './Header';
import FlexGrid from './FlexGrid';
import Carousel from './Carousel';

const useStyles = makeStyles({
    root: {
        overFlow: 'hidden',
    },
    paper: {
        minWidth: 600,
        minHeight: 400,
        overFlow: 'hidden',
    },
});

function App() {
    const [products] = useState(PRODUCTS.groups);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [anchorEl, setAnchorEl] = useState(undefined);
    const [popOver, setPopOver] = useState(false);
    const classes = useStyles();
    const selectedProductData = products.find(
        p => p.id === selectedProduct
    );

    function handleSelectProduct(e, id) {
        setSelectedProduct(id);
        setAnchorEl(e.currentTarget);
        setPopOver(true);
    }

    function handleClose() {
        setSelectedProduct('');
        setAnchorEl(undefined);
        setPopOver(false);
    }

    return (
        <>
            <Header />
            <FlexGrid
                products={products}
                handleSelectProduct={handleSelectProduct}
            />
            {selectedProductData && (
                <Popover
                    data-testid={`popover-${selectedProduct}`}
                    classes={{
                        root: classes.root,
                        paper: classes.paper,
                    }}
                    id={selectedProduct}
                    open={popOver}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Carousel images={selectedProductData.images} />
                </Popover>
            )}
        </>
    );
}

export default App;
