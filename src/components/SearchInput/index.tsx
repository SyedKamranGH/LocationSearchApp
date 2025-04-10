import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {formatGooglePlace} from '../../services/placesService';
import {Place} from '../../types';
import styles from './styles';

interface SearchInputProps {
  onPlaceSelected: (place: Place) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({onPlaceSelected}) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a location..."
        fetchDetails={true}
        onPress={(data, details = null) => {
          if (details) {
            const formattedPlace = formatGooglePlace({
              ...data,
              ...details,
              geometry: details.geometry,
              place_id: data.place_id,
            });
            onPlaceSelected(formattedPlace);
          }
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
          listView: styles.listView,
        }}
        enablePoweredByContainer={false}
        debounce={300}
      />
    </View>
  );
};

export default SearchInput;
