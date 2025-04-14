// src/components/SearchInput/index.tsx
import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { formatGooglePlace } from 'services/placesService';
import styles from './styles';
import { searchInputConfig } from './config';
import { SearchInputProps, HandlePressParams } from './types';

/**
 * Component that provides a search input with Google Places autocomplete functionality.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onPlaceSelected - Callback function when a place is selected
 * @returns {React.ReactElement} The rendered SearchInput component
 */

const SearchInput: React.FC<SearchInputProps> = ({ onPlaceSelected }) => {
  const {
    query,
    predefinedPlaces,
    autocompleteStyles,
    textInputProps,
    debounceDelay,
  } = searchInputConfig;

  /**
   * Handles when a place is selected from the autocomplete results
   *
   * @param {Object} params - The selected place data
   * @param {GooglePlaceData} params.data - The Google Place data
   * @param {GooglePlaceDetail|null} params.details - The Google Place details
   */

  const handlePress = useCallback(
    (params: HandlePressParams) => {
      const { data, details } = params;
      if (details) {
        const formattedPlace = formatGooglePlace({
          ...data,
          ...details,
          geometry: details.geometry,
          place_id: data.place_id,
        });
        onPlaceSelected(formattedPlace);
      }
    },
    [onPlaceSelected],
  );

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a location..."
        fetchDetails={true}
        onPress={(data, details) => {
          const params: HandlePressParams = { data, details };
          handlePress(params);
        }}
        query={query}
        styles={autocompleteStyles}
        predefinedPlaces={predefinedPlaces}
        enablePoweredByContainer={false}
        debounce={debounceDelay}
        textInputProps={textInputProps}
      />
    </View>
  );
};

export default memo(SearchInput);
