// src/components/SearchInput/index.tsx
import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { formatGooglePlace } from 'services/placesService';
import styles from './styles';
import { searchInputConfig } from './config';
import { SearchInputProps, HandlePressParams } from './types';

const SearchInput: React.FC<SearchInputProps> = ({ onPlaceSelected }) => {
  const {
    query,
    predefinedPlaces,
    autocompleteStyles,
    textInputProps,
    debounceDelay,
  } = searchInputConfig;

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
