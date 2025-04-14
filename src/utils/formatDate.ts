/**
 * Formats a timestamp to a localized date string.
 *
 * @function formatDate
 * @param {number} timestamp - The timestamp to format
 * @returns {string} The formatted date string
 */

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString();
};
