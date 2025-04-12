import React, { memo, useCallback, useState, useRef, useEffect } from 'react';
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

const predefinedPlaces: Place[] = [];

const autocompleteStyles: Partial<Styles> = {
  textInputContainer: styles.textInputContainer,
  textInput: styles.textInput,
  listView: styles.listView,
};

const SearchInput: React.FC<SearchInputProps> = ({ onPlaceSelected }) => {
  const autocompleteRef = useRef<typeof GooglePlacesAutocomplete | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [textInputProps] = useState<TextInputProps>({
    placeholderTextColor: 'grey',
    returnKeyType: 'search',
    autoCapitalize: 'none',
    autoCorrect: false,
  });

  const handleTextChange = useCallback((text: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      console.log('Debounced search for:', text);
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

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

        if (autocompleteRef.current) {
          (autocompleteRef.current as any)?.clear?.();
        }
      }
    },
    [onPlaceSelected],
  );

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={autocompleteRef as any}
        placeholder="Search for a location..."
        fetchDetails={true}
        onPress={handlePress}
        query={googleAutocompleteQuery}
        styles={autocompleteStyles}
        predefinedPlaces={predefinedPlaces}
        enablePoweredByContainer={false}
        debounce={300}
        textInputProps={{
          ...textInputProps,
          onChangeText: handleTextChange,
        }}
        onFail={error =>
          console.error('GooglePlacesAutocomplete error:', error)
        }
        keyboardShouldPersistTaps="handled"
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]}
        minLength={2}
      />
    </View>
  );
};

export default memo(SearchInput);
