const sizes = {
	xsmall: '576px',
	small: '768px',
	medium: '992px',
	large: '1200px',
};

/**
 * @object mediaQuery - provides the correct param into a media query based on specified size
 */
export const mediaQuery = {
	xsmall: `max-width: ${sizes.xsmall}`,
	small: `max-width: ${sizes.small}`,
	medium: `max-width: ${sizes.medium}`,
	large: `max-width: ${sizes.large}`,
};
