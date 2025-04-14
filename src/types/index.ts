import { LatLng } from 'react-native-maps';

/**
 * Represents a place or location in the application.
 *
 * @interface Place
 * @property {string} id - Unique identifier for the place
 * @property {string} name - Name or title of the place
 * @property {string} address - Full address of the place
 * @property {LatLng} location - Geographic coordinates of the place
 * @property {number} timestamp - Time when the place was added to history (milliseconds since epoch)
 */
export interface Place {
  id: string;
  name: string;
  address: string;
  location: LatLng;
  timestamp: number;
}

/**
 * Represents a geographical region on the map.
 *
 * @interface Region
 * @property {number} latitude - Latitude of the center point
 * @property {number} longitude - Longitude of the center point
 * @property {number} latitudeDelta - The amount of north-to-south distance to display
 * @property {number} longitudeDelta - The amount of east-to-west distance to display
 */
export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
