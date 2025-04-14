import AsyncStorage from '@react-native-async-storage/async-storage';
import { Place } from 'types';

const HISTORY_KEY = 'SEARCH_HISTORY';

/**
 * Saves the search history to AsyncStorage.
 *
 * @async
 * @function saveSearchHistory
 * @param {Place[]} history - The search history to save
 * @returns {Promise<void>}
 */

export const saveSearchHistory = async (history: Place[]) => {
  try {
    const jsonValue = JSON.stringify(history);
    await AsyncStorage.setItem(HISTORY_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving search history:', error);
  }
};

/**
 * Retrieves the search history from AsyncStorage.
 *
 * @async
 * @function getSearchHistory
 * @returns {Promise<Place[]>} The search history
 */

export const getSearchHistory = async (): Promise<Place[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(HISTORY_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error getting search history:', error);
    return [];
  }
};

/**
 * Adds a place to the search history in AsyncStorage.
 * Only adds the place if it doesn't already exist in the history.
 * Limits the history to 10 items.
 *
 * @async
 * @function addToSearchHistory
 * @param {Place} place - The place to add to history
 * @returns {Promise<void>}
 */
export const addToSearchHistory = async (place: Place) => {
  try {
    const history = await getSearchHistory();
    const exists = history.some(item => item.id === place.id);

    if (!exists) {
      const updatedHistory = [place, ...history];
      const limitedHistory = updatedHistory.slice(0, 10);

      await saveSearchHistory(limitedHistory);
    }
  } catch (error) {
    console.error('Error adding to search history:', error);
  }
};
