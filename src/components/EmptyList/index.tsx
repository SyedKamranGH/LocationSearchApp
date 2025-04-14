import React from 'react';
import { Text } from 'react-native';
import { EmptyListProps } from './types';
import styles from './styles';

/**
 * A component for displaying an empty state message.
 * Used when a list has no items to display.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.message - The message to display in the empty state
 * @returns {React.ReactElement} The rendered EmptyList component
 */

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  return <Text style={styles.emptyText}>{message}</Text>;
};

export default EmptyList;
