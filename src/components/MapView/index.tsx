import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';
import { MapComponentProps } from './types';

/**
 * Component that renders a Google Map with optional marker for the selected place.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Region} props.region - The map region to display
 * @param {Place|null} props.selectedPlace - The selected place to display a marker for
 * @param {Function} [props.onPress] - Optional callback when the map is pressed
 * @returns {React.ReactElement} The rendered MapComponent
 */

const MapComponent: React.FC<MapComponentProps> = ({
  region,
  selectedPlace,
  onPress,
}) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      showsUserLocation={true}
      initialRegion={region}
      onPress={onPress}>
      {selectedPlace && (
        <Marker
          coordinate={selectedPlace.location}
          title={selectedPlace.name}
          description={selectedPlace.address}
        />
      )}
    </MapView>
  );
};

export default MapComponent;
