import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: 50,
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100vw',
        justifyContent: 'center',
    }
});

function FlexGrid({products}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

FlexGrid.propTypes = {
    products: PropTypes.array,
};

export default FlexGrid;

