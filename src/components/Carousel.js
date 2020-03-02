import React from 'react';
import {makeStyles} from '@material-ui/core';
import {isMobile} from './utils';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const useStyles = makeStyles({
    awssld: {
        '--slider-height-percentage': '60%',
        '--slider-transition-duration': '100ms',
        '--organic-arrow-thickness': '8px',
        '--organic-arrow-border-radius': '18px',
        '--organic-arrow-height': '40px',
        '--control-button-width': '10%',
        '--control-button-height': '25%',
        '--control-button-background': 'transparent',
        '--control-bullet-color': '#515151',
        '--control-bullet-active-color': '#929292',
        '--loader-bar-color': 'transparent',
        '--loader-bar-height': '0px',
    },
    leftArrow: {
        top: '40%',
        left: 2,
        height: 71,
        width: 71,
        borderRadius: '50%',
        opacity: 0.6,
        backgroundColor: '#ffffff',
        zIndex: 2,
        position: 'absolute',
        display: isMobile() ? 'none' : 'auto',
    },
    rightArrow: {
        top: '40%',
        right: 2,
        height: 71,
        width: 71,
        borderRadius: '50%',
        opacity: 0.6,
        backgroundColor: '#ffffff',
        zIndex: 2,
        position: 'absolute',
        display: isMobile() ? 'none' : 'auto',
    },
    mobile: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '320px',
        maxHeight: '320px',
    },
    desktop: {
        display: 'flex',
    },
});

const Carousel = ({images}) => {
    const classes = useStyles();
    const circle = React.createElement(
        'div',
        {className: classes.leftArrow},
        ''
    );
    const circle1 = React.createElement(
        'div',
        {className: classes.rightArrow},
        ''
    );
    const circles = React.createElement(
        'div',
        {id: 'circles'},
        circle,
        circle1
    );

    return (
        <div className={isMobile() ? classes.mobile : classes.desktop}>
            <AwesomeSlider
                className={classes.awssld}
                customContent={circles}
                mobileTouch
                media={images.map(i => ({source: i.href}))}
            ></AwesomeSlider>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
};

export default Carousel;
