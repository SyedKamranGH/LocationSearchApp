import { Place } from 'types';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  Place as GooglePlace,
  Styles,
  Query,
} from 'react-native-google-places-autocomplete';
import { TextInputProps } from 'react-native';

/**
 * Props interface for the SearchInput component.
 *
 * @interface SearchInputProps
 * @property {Function} onPlaceSelected - Callback function when a place is selected
 */
export interface SearchInputProps {
  onPlaceSelected: (place: Place) => void;
}

/**
 * Parameters for the handlePress function.
 *
 * @interface HandlePressParams
 * @property {GooglePlaceData} data - The Google Place data
 * @property {GooglePlaceDetail|null} details - The Google Place details
 */
export interface HandlePressParams {
  data: GooglePlaceData;
  details: GooglePlaceDetail | null;
}

/**
 * Configuration interface for Google Autocomplete.
 *
 * @interface GoogleAutocompleteConfig
 * @property {Query} query - The query parameters for the Google Places API
 * @property {GooglePlace[]} predefinedPlaces - Predefined places to show in the autocomplete results
 * @property {Partial<Styles>} autocompleteStyles - Custom styles for the autocomplete components
 * @property {TextInputProps} textInputProps - Props for the TextInput component
 * @property {number} debounceDelay - Delay in milliseconds to debounce the search input
 * @property {string[]} [filterReverseGeocodingByTypes] - Types to filter reverse geocoding results by
 */
export interface GoogleAutocompleteConfig {
  query: Query;
  predefinedPlaces: GooglePlace[];
  autocompleteStyles: Partial<Styles>;
  textInputProps: TextInputProps;
  debounceDelay: number;
  filterReverseGeocodingByTypes?: string[];
}
