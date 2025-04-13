import React, { memo, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Place } from 'types';
import styles from './styles';
import { HistoryListProps } from './types';
import HistoryItem from './components/HistoryItem';
import EmptyList from 'components/EmptyList';
import { getItemKey } from 'utils/getItemKey';

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  onPlaceSelect,
  visible,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Place }) => (
      <HistoryItem item={item} onPress={onPlaceSelect} />
    ),
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
