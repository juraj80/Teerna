const minSize = {
	xs: '576px',
	sm: '768px',
	md: '992px',
	lg: '1200px',
};

export const minDevice = {
	xs: `min-width: ${minSize.xs}`,
	sm: `min-width: ${minSize.sm}`,
	md: `min-width: ${minSize.md}`,
	lg: `min-width: ${minSize.lg}`,
};

const maxSize = {
	xs: '575.98px',
	sm: '767.98px',
	md: '991.98px',
	lg: '1199.98px',
};

export default {
	xs: `max-width: ${maxSize.xs}`,
	sm: `max-width: ${maxSize.sm}`,
	md: `max-width: ${maxSize.md}`,
	lg: `max-width: ${maxSize.lg}`,
};
