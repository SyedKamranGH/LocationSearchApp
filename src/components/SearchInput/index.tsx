import React, { memo, useCallback } from 'react';
import { View, TextInputProps } from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  Place,
  Styles,
} from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from 'config';
import { formatGooglePlace } from 'services/placesService';
import styles from './styles';
import { SearchInputProps } from './types';

const googleAutocompleteQuery = {
  key: GOOGLE_MAPS_API_KEY,
  language: 'en',
};

// const googleAutocompleteInputTextProps = {
//   placeholderTextColor: 'grey',
//   returnKeyType: 'search',
// };

const predefinedPlaces: Place[] = [];
const textInputProps: TextInputProps = {};

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
