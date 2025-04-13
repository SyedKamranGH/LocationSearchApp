import React from 'react';
import MapView, {
  MapPressEvent,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import { Region, Place } from 'types';
import styles from './styles';

interface MapComponentProps {
  region: Region;
  selectedPlace: Place | null;
  onPress?: (event: MapPressEvent) => void;
}

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
