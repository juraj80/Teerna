import { oneOf } from "prop-types";
import { css } from "styled-components"

/**
 * @function zIndex - gives the css z-index representing placement order
 * @param {string} order - one of 'below', 'bottom', 'top', 'above' with respect to the order of content 
 * @returns {import("styled-components").CSSObject}
 */
export const zIndex = (order = 'base') => {
    let val = 10;
    switch (order) {
        case 'below': val = -10; break;
        case 'bottom': val = 0; break;
        case 'top': val = 20; break;
        case 'above': val = 100; break;
        default: val = 10;
    }

    return css`z-index: ${val};`;
}

zIndex.propTypes = {
    order: oneOf(['below','bottom','top', 'above'])
}