// src/services/placesService.ts

import {Place} from '../types';
import {addToSearchHistory} from '../utils/storage';

/**
 * Save place to history
 * @param place - Place data to save
 */
export const savePlaceToHistory = async (place: Place): Promise<void> => {
  try {
    await addToSearchHistory(place);
  } catch (error) {
    console.error('Error saving place to history:', error);
  }
};

/**
 * Convert Google Place data to our Place interface
 * @param placeData - Data from Google Places API
 * @returns Formatted Place object
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
