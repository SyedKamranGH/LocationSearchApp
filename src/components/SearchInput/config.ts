// src/components/SearchInput/config.ts
import { GOOGLE_MAPS_API_KEY } from 'config';
import {
  Place,
  Query,
  Language,
} from 'react-native-google-places-autocomplete';
import { TextInputProps, ReturnKeyTypeOptions } from 'react-native';
import { GoogleAutocompleteConfig } from './types';
import styles from './styles';

const googleAutocompleteQuery: Query = {
  key: GOOGLE_MAPS_API_KEY || '',
  language: 'en' as Language,
};

const predefinedPlaces: Place[] = [];

const autocompleteStyles = {
  textInputContainer: styles.textInputContainer,
  textInput: styles.textInput,
  listView: styles.listView,
};

const textInputProps: TextInputProps = {
  placeholderTextColor: 'grey',
  returnKeyType: 'search' as ReturnKeyTypeOptions,
};

const filterReverseGeocodingByTypes = [
  'locality',
  'administrative_area_level_3',
];

const debounceDelay = 300;

export const searchInputConfig: GoogleAutocompleteConfig = {
  query: googleAutocompleteQuery,
  predefinedPlaces,
  autocompleteStyles,
  textInputProps,
  debounceDelay,
  filterReverseGeocodingByTypes,
};
