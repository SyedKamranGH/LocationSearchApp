import React, { memo, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { HistoryListProps, PlaceRenderItem } from './types';
import HistoryItem from './components/HistoryItem';
import EmptyList from 'components/EmptyList';
import { getItemKey } from 'utils/getItemKey';

/**
 * Component that displays a list of search history items.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Place[]} props.history - Array of place objects representing search history
 * @param {Function} props.onPlaceSelect - Callback function when a place is selected
 * @param {boolean} props.visible - Whether the history list should be visible
 * @returns {React.ReactElement|null} The rendered HistoryList component or null if not visible
 */

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  onPlaceSelect,
  visible,
}) => {
  const renderItem: PlaceRenderItem = useCallback(
    ({ item }) => <HistoryItem item={item} onPress={onPlaceSelect} />,
    [onPlaceSelect],
  );

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.historyTitle}>Search History</Text>
      {history.length === 0 ? (
        <EmptyList message="No search history yet" />
      ) : (
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={getItemKey}
          style={styles.list}
        />
      )}
    </View>
  );
};

export default memo(HistoryList);
