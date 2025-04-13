import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Place } from 'types';
import styles from './styles';

interface HistoryListProps {
  history: Place[];
  onPlaceSelect: (place: Place) => void;
  visible: boolean;
}

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  onPlaceSelect,
  visible,
}) => {
  if (!visible) {
    return null;
  }

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  const renderItem = ({ item }: { item: Place }) => (
    <TouchableOpacity
      style={styles.historyItem}
      onPress={() => onPlaceSelect(item)}>
      <View style={styles.historyItemContent}>
        <Text style={styles.historyItemName}>{item.name}</Text>
        <Text style={styles.historyItemAddress}>{item.address}</Text>
        <Text style={styles.historyItemDate}>{formatDate(item.timestamp)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.historyTitle}>Search History</Text>
      {history.length === 0 ? (
        <Text style={styles.emptyText}>No search history yet</Text>
      ) : (
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      )}
    </View>
  );
};

export default HistoryList;
