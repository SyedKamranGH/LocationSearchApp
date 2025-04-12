import React, { memo, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Place } from 'types';
import styles from './styles';

interface HistoryListProps {
  history: Place[];
  onPlaceSelect: (place: Place) => void;
  visible: boolean;
}

const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString();
};

const HistoryItem = memo(
  ({ item, onSelect }: { item: Place; onSelect: (place: Place) => void }) => (
    <TouchableOpacity style={styles.historyItem} onPress={() => onSelect(item)}>
      <View style={styles.historyItemContent}>
        <Text style={styles.historyItemName}>{item.name}</Text>
        <Text style={styles.historyItemAddress}>{item.address}</Text>
        <Text style={styles.historyItemDate}>{formatDate(item.timestamp)}</Text>
      </View>
    </TouchableOpacity>
  ),
);

const EmptyListComponent = () => (
  <Text style={styles.emptyText}>No search history yet</Text>
);

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  onPlaceSelect,
  visible,
}) => {
  const keyExtractor = useCallback((item: Place) => item.id, []);

  const renderItem = useCallback(
    ({ item }: { item: Place }) => (
      <HistoryItem item={item} onSelect={onPlaceSelect} />
    ),
    [onPlaceSelect],
  );

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.historyTitle}>Search History</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
        ListEmptyComponent={EmptyListComponent}
      />
    </View>
  );
};

export default memo(HistoryList);
