import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  Styles,
} from 'react-native-google-places-autocomplete';
import { formatGooglePlace } from 'services/placesService';
import styles from './styles';
import {
  googleAutocompleteQuery,
  predefinedPlaces,
  textInputProps,
} from './config';
import { SearchInputProps } from './types';

const autocompleteStyles: Partial<Styles> = {
  textInputContainer: styles.textInputContainer,
  textInput: styles.textInput,
  listView: styles.listView,
};

const SearchInput: React.FC<SearchInputProps> = ({ onPlaceSelected }) => {
  const handlePress = useCallback(
    (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
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
        onPress={handlePress}
        query={googleAutocompleteQuery}
        styles={autocompleteStyles}
        predefinedPlaces={predefinedPlaces}
        enablePoweredByContainer={false}
        debounce={300}
        textInputProps={textInputProps}
      />
    </View>
  );
};

export default memo(SearchInput);
