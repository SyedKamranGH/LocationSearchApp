import { Place } from 'types';

export interface HistoryListProps {
  history: Place[];
  onPlaceSelect: (place: Place) => void;
  visible: boolean;
}

export interface HistoryItemProps {
  item: Place;
  onPress: (place: Place) => void;
}
