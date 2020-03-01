import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minHeight: 50,
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        background: '#fff',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 2,
    },
});

function Header() {
    const classes = useStyles();
    
    return (
        <header className={classes.root} id="header">
            <Typography variant="h3" component="h3" color="primary">
                southeast oak
            </Typography>
        </header>
    );
}
export default Header;
