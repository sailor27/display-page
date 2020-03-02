import React from 'react';
import PropTypes from 'prop-types';
import {formatHTML, isValidUrl, getDisplayPrice} from './utils';
import {makeStyles} from '@material-ui/core/styles';
import ImageNotAvailable from './ImageNotAvailable';
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
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.95,
        padding: 10,
    },
    priceTag: {
        position: 'absolute',
        top: '85%',
        left: 10,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        opacity: 0.8,
        borderRadius: 4,
        padding: 6,
    },
}));

function Product(props) {
    const classes = useStyles(props);
    const {
        handleSelectProduct,
        product: {
            name = '',
            id = '',
            hero: {href} = {
                href: '',
                height: 363,
                width: 363,
            },
            price = {},
            priceRange = {},
        },
    } = props;

    return (
        <Card
            className={classes.card}
            data-testid={`card-${id}`}
            onClick={e => handleSelectProduct(e, id)}
        >
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
                    variant="button"
                    component="h6"
                    align="left"
                >
                    {formatHTML(name)}
                </Typography>
                <Typography
                    className={classes.priceTag}
                    variant="button"
                    component="h6"
                    align="left"
                >
                    {getDisplayPrice(price, priceRange)}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

Product.propTypes = {
    handleSelectProduct: PropTypes.func,
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
