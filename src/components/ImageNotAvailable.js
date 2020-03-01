import React from 'react';
import {Typography} from '@material-ui/core';

const ImageNotAvailable = () => (
    <Typography data-testid='image-not-available' gutterBottom variant="h6" component="h6" align="center">
        Image not available{' '}
        <span role="img" aria-label="flower decoration">
            🌼
        </span>
    </Typography>
);

export default ImageNotAvailable;
