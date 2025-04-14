import { MapPressEvent } from 'react-native-maps';
import { Place, Region } from 'types/index';

/**
 * Props interface for the MapComponent.
 *
 * @interface MapComponentProps
 * @property {Region} region - The map region to display
 * @property {Place|null} selectedPlace - The selected place to display a marker for
 * @property {Function} [onPress] - Optional callback when the map is pressed
 */
export interface MapComponentProps {
  region: Region;
  selectedPlace: Place | null;
  onPress?: (event: MapPressEvent) => void;
}
