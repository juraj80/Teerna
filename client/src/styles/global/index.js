import { createGlobalStyle, css } from 'styled-components';
import { resources, maxDevice, typography } from '../constants';

export const GlobalStyle = createGlobalStyle`
    * {
	    outline: none;
	    box-sizing: border-box;
     }

     html {
	    box-sizing: border-box;
	    -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: ${typography.family.body};
        background-image: url('${resources.backgrounds.base}');
        background-size: cover;
        background-position: center;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 32px;
        width: 100%;
        height: 100vh;
        @media screen and (${maxDevice.xs}) {
            padding: 12.8px;
        }

        ${({ theme }) =>
					theme.name === 'light' &&
					css`
						&:before {
							content: '';
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100vh;
							background: linear-gradient(
								180deg,
								rgba(255, 255, 255, 0.75) 0%,
								rgb(255 255 255 / 0.45) 100%
							);
							backdrop-filter: saturate(3);
						}
					`}
    }

    img {
        max-width: 100%;
    }
`;
