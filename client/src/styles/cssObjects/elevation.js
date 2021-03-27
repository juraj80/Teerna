import { css } from 'styled-components';
import { getElevationShadow } from '../styleUtils';

/**
 * returns the css of the shadow for the respective elevation level
 * @param {Number} level - [0,24]
 * @returns {import('styled-components').CSSObject} 
 */
 export const elevation = (level) => css`
    box-shadow: ${getElevationShadow(level)};
`;
