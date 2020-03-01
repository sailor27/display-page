import React from 'react';
import PropTypes from 'prop-types';
import {formatHTML, isValidUrl} from './utils';
import {makeStyles} from '@material-ui/core/styles';
import ImageNotAvailable from './ImageNotAvailable'
import {Card, CardActionArea, CardMedia, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: props => ({
        height: props.product.hero.height,
        width: props.product.hero.width,
        margin: 15,
        display: 'flex',
        justifyContent: 'center',
    }),
    cardAction: {
        objectFit: 'cover',
    },
    media: props => ({
        height: props.product.hero.height,
        width: props.product.hero.width,
    }),
    label: {
        position: 'absolute',
        top: 0,
        width: '100%',
        // backgroundColor: theme.palette.secondary.main,
        backgroundColor: '#eaeaea',
        opacity: 0.95,
        padding: 10,
    },
}));

function Product(props) {
    const classes = useStyles(props);
    const {
        product: {
            name = '',
            id = '',
            hero: {href, height, width} = {
                href: '',
                height: 363,
                width: 363,
            },
            price: {regular, selling} = {},
            priceRange: {selling: {high, low}} = {selling: {}},
        },
    } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardAction}>
                {isValidUrl(href) ? (
                    <>
                        <CardMedia
                            className={classes.media}
                            image={href}
                            title={name}
                        />
                    </>
                ) : (
                    <ImageNotAvailable />
                )}
                <Typography
                    className={classes.label}
                    variant="h6"
                    component="h6"
                    align="left"
                >
                    {formatHTML(name)}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        hero: PropTypes.shape({
            href: PropTypes.string.isRequired,
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
        }).isRequired,
        price: PropTypes.shape({
            regular: PropTypes.number.isRequired,
            selling: PropTypes.number.isRequired,
        }),
        priceRange: PropTypes.shape({
            selling: PropTypes.shape({
                high: PropTypes.number.isRequired,
                low: PropTypes.number.isRequired,
            }).isRequired,
        }),
    }).isRequired,
};

export default Product;
