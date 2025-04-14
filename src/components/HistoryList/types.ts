import { ListRenderItem } from 'react-native';
import { Place } from 'types';

/**
 * Props interface for the HistoryList component.
 *
 * @interface HistoryListProps
 * @property {Place[]} history - Array of place objects representing search history
 * @property {Function} onPlaceSelect - Callback function when a place is selected
 * @property {boolean} visible - Whether the history list should be visible
 */

export interface HistoryListProps {
  history: Place[];
  onPlaceSelect: (place: Place) => void;
  visible: boolean;
}

export interface HistoryItemProps {
  item: Place;
  onPress: (place: Place) => void;
}

export type PlaceRenderItem = ListRenderItem<Place>;
