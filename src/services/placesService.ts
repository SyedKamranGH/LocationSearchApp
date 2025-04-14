import { Place } from 'types';
import { addToSearchHistory } from 'utils/storage';

/**
 * Saves a place to the search history.
 *
 * @async
 * @function savePlaceToHistory
 * @param {Place} place - The place to save to history
 * @returns {Promise<void>}
 */
export const savePlaceToHistory = async (place: Place): Promise<void> => {
  try {
    await addToSearchHistory(place);
  } catch (error) {
    console.error('Error saving place to history:', error);
  }
};

/**
 * Formats Google Place data into the application's Place format.
 *
 * @function formatGooglePlace
 * @param {any} placeData - The Google Place data to format
 * @returns {Place} The formatted Place object
 */
export const formatGooglePlace = (placeData: any): Place => {
  return {
    id: placeData.place_id || String(Date.now()),
    name: placeData.name || placeData.description || 'Unknown Place',
    address: placeData.formatted_address || placeData.description || '',
    location: {
      latitude: placeData.geometry?.location.lat || 0,
      longitude: placeData.geometry?.location.lng || 0,
    },
    timestamp: Date.now(),
  };
};
