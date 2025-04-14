import React, { memo } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles';
import { HistoryItemProps } from '../types';
import { formatDate } from 'utils/formatDate';

const HistoryItem: React.FC<HistoryItemProps> = ({ item, onPress }) => {
  return (
    <Pressable style={styles.historyItem} onPress={() => onPress(item)}>
      <View style={styles.historyItemContent}>
        <Text style={styles.historyItemName}>{item.name}</Text>
        <Text style={styles.historyItemAddress}>{item.address}</Text>
        <Text style={styles.historyItemDate}>{formatDate(item.timestamp)}</Text>
      </View>
    </Pressable>
  );
};

export default memo(HistoryItem);
