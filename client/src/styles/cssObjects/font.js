import { bool, number, oneOf } from 'prop-types';
import { css } from 'styled-components';

//https://www.webdesignerdepot.com/2020/07/the-designers-guide-to-letter-spacing/
// Text Spacing accessibility - https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html
// font- size accessibility: https://medium.muz.li/font-sizing-for-ux-designers-part-one-a9853568ef3d
export const fontFamily = "'soleil', sans-serif";
// const mobileSizeMap = {
// 		1: '10px',
// 		2: '13px',
// 		3: '14px',
// 		4: '16px',
// 		5: '17px',
// 		6: '21px',
// 		7: '24px',
// 		8: '27px',
// 		9: '34px',
// 		10: '44px',
// 	};

const webSizeMap = {
	1: '12px',
	2: '16px',
	3: '21px',
	4: '24px',
	5: '27px',
	6: '34px',
	7: '44px',
	8: '65px',
	9: '105px',
};

const displaySpacing = {
	1: '0%',
	2: '0.16%',
	3: '0.15%',
	4: '0%',
	5: '0%',
	6: '0.25%',
	7: '0%',
	8: '-0.5%',
	9: '-1.5%',
};

/**
 * @function font - returns the font/typography css depending on the type
 *  of text being displated
 * @param {Number} size - from size 1 (12px) to size 9(105px)
 * @param {string} setting - content type, i.e. BODY, DISPLAY, TITLE 
 * @param {Boolean} italic - italicise the text or not 
 * @returns {import('styled-components').CSSObject}
 */
export const font = (size, setting = 'BODY', italic = false) => {
	if (setting === 'TITLE')
		return css`
			font-family: ${fontFamily};
			font-weight: 700;
			font-size: ${size ? webSizeMap[size] : webSizeMap[6]};
			text-transform: capitalize;
			line-height: 1.5;
			letter-spacing: ${size ? displaySpacing[size] : displaySpacing[6]};
			word-spacing: 0.16;
			font-style: ${italic ? 'italic' : 'normal'};
		`;
	else if (setting === 'DISPLAY')
		return css`
			font-family: ${fontFamily};
			font-weight: 500;
			font-size: ${size ? webSizeMap[size] : webSizeMap[7]};
			text-transform: uppercase;
			line-height: 1.5;
			letter-spacing: ${size ? displaySpacing[size] : displaySpacing[6]};
			word-spacing: 0.16;
			font-style: ${italic ? 'italic' : 'normal'};
		`;
	return css`
		font-family: ${fontFamily};
		font-weight: 300;
		font-size: ${size ? webSizeMap[size] : webSizeMap[2]};
		text-transform: none;
		line-height: 1.5;
		letter-spacing: ${size < 2 ? '0.25%' : '0.5%'};
		word-spacing: 0.18;
		font-style: ${italic ? 'italic' : 'normal'};
	`;
};

font.propTypes = {
	size: number,
	setting: oneOf(['BODY', 'TITLE', 'DISPLAY']),
	italic: bool,
};
