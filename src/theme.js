import {red, yellow, indigo, pink} from '@material-ui/core/colors';
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

let theme = createMuiTheme({
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

const altTheme = createMuiTheme({
    palette: {
        primary: {
            main: indigo.A700,
        },
        secondary: {
            main: yellow.A400,
        },
        error: {
            main: pink.A200,
        },
        background: {
            default: '#fff',
        },
    },
});

// show ~30% of users a colorful theme! 🌈
theme = Math.random() < 0.7 ? theme : altTheme;

export default responsiveFontSizes(theme);
