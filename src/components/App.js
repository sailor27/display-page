import * as PRODUCTS from '../data/shop-all-new.json';
import axios from 'axios';
import {makeStyles, Popover} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
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

const API =
    'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';

function App() {
    const [products, setProducts] = useState(PRODUCTS.groups);

    useEffect(() => {
        axios
            .get(API)
            .then(result => {
                const {
                    data: {groups},
                } = result;

                setProducts(groups);
            })
            .catch(() => {
                //use local file if request fails
                setProducts(PRODUCTS.groups);
            });
    }, []);

    const [selectedProduct, setSelectedProduct] = useState('');
    const [anchorEl, setAnchorEl] = useState(undefined);
    const [popOver, setPopOver] = useState(false);
    const classes = useStyles();
    const selectedProductData = products.find(p => p.id === selectedProduct);

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
