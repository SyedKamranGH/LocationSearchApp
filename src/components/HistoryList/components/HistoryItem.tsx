import React, { memo } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles';
import { HistoryItemProps } from '../types';
import { formatDate } from 'utils/formatDate';

/**
 * Component that renders an individual history item.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Place} props.item - The place object to display
 * @param {Function} props.onPress - Callback function when the item is pressed
 * @returns {React.ReactElement} The rendered HistoryItem component
 */

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
