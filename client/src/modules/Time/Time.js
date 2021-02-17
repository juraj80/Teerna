
/**
 * Formats a time to be more human friendly.
 *
 * this method is inspired by ― and a customization of ― the method available at https://muffinman.io/blog/javascript-time-ago-function/
 *
 * @param {Date} time for which one wants the time ago string.
 * @returns {string} how much time ago.
 */
export function timeAgo(time) {
  const now = new Date().getTime() / 1000;
  const seconds = Math.floor(now - (time.getTime() / 1000));
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (seconds < 5) {
    return 'now';
  } else if (seconds < 60) {
    return `${ seconds }s ago`;
  } else if (minutes < 60) {
    return `${ minutes }m ago`
  } else if (hours < 24) {
    return `${ hours }h ago`;
  } else {
    return `~${ days }d ago`;
  }
}

