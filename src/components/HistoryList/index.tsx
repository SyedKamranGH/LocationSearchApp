import React, { memo, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { HistoryListProps, PlaceRenderItem } from './types';
import HistoryItem from './components/HistoryItem';
import EmptyList from 'components/EmptyList';
import { getItemKey } from 'utils/getItemKey';

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
