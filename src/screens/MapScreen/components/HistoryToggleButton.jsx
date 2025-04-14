import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles';

const HistoryToggleButton = ({ showHistory, onToggle }) => {
  return (
    <Pressable style={styles.historyButton} onPress={onToggle}>
      <Text style={styles.historyButtonText}>
        {showHistory ? 'Hide History' : 'Show History'}
      </Text>
    </Pressable>
  );
};

export default React.memo(HistoryToggleButton);
