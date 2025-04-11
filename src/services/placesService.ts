import { Place } from 'types';
import { addToSearchHistory } from 'utils/storage';

export const savePlaceToHistory = async (place: Place): Promise<void> => {
  try {
    await addToSearchHistory(place);
  } catch (error) {
    console.error('Error saving place to history:', error);
  }
};

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
