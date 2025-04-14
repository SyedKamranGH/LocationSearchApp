import { Place } from 'types';

/**
 * Extracts the ID from a Place object to use as a key in lists.
 *
 * @function getItemKey
 * @param {Place} item - The Place object
 * @returns {string} The ID of the Place
 */

export const getItemKey = (item: Place): string => item.id;
