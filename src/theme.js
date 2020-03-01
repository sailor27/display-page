import {red, yellow, indigo} from '@material-ui/core/colors';
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = createMuiTheme({
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