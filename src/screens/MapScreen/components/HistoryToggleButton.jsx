import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles';

// Fix: Remove TypeScript specific annotation and use prop destructuring directly
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
