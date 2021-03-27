import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { mediaQuery, spacing } from '../styleMaps';
import { fontFamily } from '../cssObjects';

/**
 * @returns {CSSStyleSheet} - global styling for app as whole
 */
export default createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    body {
        ${normalize()};
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;;
        font-family: ${fontFamily};
        background-image: url('${({ theme }) => theme.backgroundImage}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        height: 100vh;
        @media screen and (${mediaQuery.xsmall}) {
            padding: ${spacing[8]} ${spacing[4]};
        }

        img {
            max-width: 100vw;
        }
    }
`;
