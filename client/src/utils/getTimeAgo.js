/**
 * Formats a time to be more human friendly.
 *
 * this method is inspired by ― and a customization of ― the method available at https://muffinman.io/blog/javascript-time-ago-function/
 *
 * @param {Date} time for which one wants the time ago string.
 * @returns {string} how much time ago.
 */
export const getTimeAgo = time => {
	const now = new Date().getTime() / 1000;
	const seconds = Math.floor(now - time.getTime() / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	return seconds < 5
		? 'now'
		: seconds < 60
		? `${seconds}s ago`
		: minutes < 60
		? `${minutes}m ago`
		: hours < 24
		? `${hours}h ago`
		: `~${days}d ago`;
};
