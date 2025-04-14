import { Place } from 'types';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  Place as GooglePlace,
  Styles,
  Query,
} from 'react-native-google-places-autocomplete';
import { TextInputProps } from 'react-native';

export interface SearchInputProps {
  onPlaceSelected: (place: Place) => void;
}

export interface HandlePressParams {
  data: GooglePlaceData;
  details: GooglePlaceDetail | null;
}

export interface GoogleAutocompleteConfig {
  query: Query;
  predefinedPlaces: GooglePlace[];
  autocompleteStyles: Partial<Styles>;
  textInputProps: TextInputProps;
  debounceDelay: number;
  filterReverseGeocodingByTypes?: string[];
}
