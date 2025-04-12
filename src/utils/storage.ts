import AsyncStorage from '@react-native-async-storage/async-storage';
import { Place } from 'types';

const HISTORY_KEY = 'SEARCH_HISTORY';
const MAX_HISTORY_ITEMS = 10;

export const saveSearchHistory = async (history: Place[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('[Storage] Failed to save search history:', error);
  }
};

export const getSearchHistory = async (): Promise<Place[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(HISTORY_KEY);
    if (!jsonValue) return [];
    return JSON.parse(jsonValue) as Place[];
  } catch (error) {
    console.error('[Storage] Failed to retrieve search history:', error);
    return [];
  }
};

export const addToSearchHistory = async (newPlace: Place): Promise<void> => {
  try {
    const history = await getSearchHistory();

    const alreadyExists = history.some(place => place.id === newPlace.id);
    if (alreadyExists) return;

    const updatedHistory = [newPlace, ...history].slice(0, MAX_HISTORY_ITEMS);
    await saveSearchHistory(updatedHistory);
  } catch (error) {
    console.error('[Storage] Failed to add place to history:', error);
  }
};
