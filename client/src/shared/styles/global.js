import { createGlobalStyle, css } from 'styled-components';
import { opacify, transparentize } from 'polished';
import { images } from '../assets';
import colour from './colour';
import font from './font';
import mediaQuery from './mediaQuery';
import space from './space';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    body {
        font-family: ${font.family.body};
        background-image: url('${images.background.base}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        padding:  ${`${space.medium[200]} ${space.medium[100]}`};
        width: 100%;
        height: 100vh;
        @media screen and (${mediaQuery.xsmall}) {
            padding: ${`${space.small[200]} ${space.small[100]}`};
        }

        &:before {
            ${({ theme }) => {
                return ( theme.name === 'light' &&
                    css`
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(180deg,
                            ${transparentize(0.72, colour.white[100])} 0%;
                            ${opacify(0.45, colour.white[100])});
                        backdrop-filter: saturate(3);
                    `
                );
            }};
        }
    }

    img {
        max-width: 100%;
    }
`;
