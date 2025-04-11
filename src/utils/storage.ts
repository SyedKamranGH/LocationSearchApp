import AsyncStorage from '@react-native-async-storage/async-storage';
import { Place } from 'types';

const HISTORY_KEY = 'SEARCH_HISTORY';

export const saveSearchHistory = async (history: Place[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(history);
    await AsyncStorage.setItem(HISTORY_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving search history:', error);
  }
};

export const getSearchHistory = async (): Promise<Place[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(HISTORY_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error getting search history:', error);
    return [];
  }
};

export const addToSearchHistory = async (place: Place): Promise<void> => {
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
