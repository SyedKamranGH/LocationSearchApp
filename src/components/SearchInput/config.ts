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

/**
 * Configuration for the Google Places Autocomplete component.
 */

/**
 * The query parameters for the Google Places API.
 * @type {Query}
 */
const googleAutocompleteQuery: Query = {
  key: GOOGLE_MAPS_API_KEY || '',
  language: 'en' as Language,
};

/**
 * Predefined places to show in the autocomplete results.
 * @type {Place[]}
 */

const predefinedPlaces: Place[] = [];

/**
 * Custom styles for the autocomplete components.
 * @type {Object}
 */

const autocompleteStyles = {
  textInputContainer: styles.textInputContainer,
  textInput: styles.textInput,
  listView: styles.listView,
};

/**
 * Props for the TextInput component.
 * @type {TextInputProps}
 */

const textInputProps: TextInputProps = {
  placeholderTextColor: 'grey',
  returnKeyType: 'search' as ReturnKeyTypeOptions,
};

/**
 * Types to filter reverse geocoding results by.
 * @type {string[]}
 */

const filterReverseGeocodingByTypes = [
  'locality',
  'administrative_area_level_3',
];

/**
 * Delay in milliseconds to debounce the search input.
 * @type {number}
 */

const debounceDelay = 300;

/**
 * Complete configuration object for the SearchInput component.
 */

export const searchInputConfig: GoogleAutocompleteConfig = {
  query: googleAutocompleteQuery,
  predefinedPlaces,
  autocompleteStyles,
  textInputProps,
  debounceDelay,
  filterReverseGeocodingByTypes,
};
