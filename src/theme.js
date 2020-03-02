import {red, yellow, indigo} from '@material-ui/core/colors';
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121',
            light: '#484848',
            dark: '#000000',
            contrastText: '#e0e0e0',
        },
        secondary: {
            main: '#e0e0e0',
            light: '#ffffff',
            dark: '#aeaeae',
            contrastText: '#212121',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});
/* eslint-disable-next-line no-unused-vars */
const altTheme = createMuiTheme({
    palette: {
        primary: {
            main: indigo.A700,
        },
        secondary: {
            main: yellow.A400,
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },

});

export default responsiveFontSizes(theme);