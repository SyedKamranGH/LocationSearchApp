import { GOOGLE_MAPS_API_KEY } from 'config';
import { TextInputProps } from 'react-native';
import { Place } from 'react-native-google-places-autocomplete';

export const googleAutocompleteQuery = {
  key: GOOGLE_MAPS_API_KEY,
  language: 'en',
};
export const googleAutocompleteInputTextProps = {
  placeholderTextColor: 'grey',
  returnKeyType: 'search',
};

export const predefinedPlaces: Place[] = [];
export const textInputProps: TextInputProps = {};
