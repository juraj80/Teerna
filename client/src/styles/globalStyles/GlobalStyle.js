import { createGlobalStyle, css } from 'styled-components';
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
        font-family: ${fontFamily};
        background-image: ${({ theme }) => theme.backdrop};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        /* @TODO change spacing */
        padding:  ${spacing.medium[200]} ${spacing.medium[100]};
        width: 100%;
        height: 100vh;
        @media screen and (${mediaQuery.xsmall}) {
            /* @TODO change spacing */
            padding: ${spacing.small[200]} ${spacing.small[100]};
        }

        ${({ theme }) =>
					theme.mode === 'light' &&
					css`
						&:before {
							content: '';
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							backdrop-filter: saturate(3);
						}
					`};
    }

    img {
        max-width: 100%;
    }
`;
