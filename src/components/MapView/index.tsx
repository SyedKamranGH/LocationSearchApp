import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';
import {Region, Place} from '../../types';
import styles from './styles';

interface MapComponentProps {
  region: Region;
  selectedPlace: Place | null;
  onRegionChange?: (region: Region) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({
  region,
  selectedPlace,
  onRegionChange,
}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={onRegionChange}>
        {selectedPlace && (
          <Marker
            coordinate={{
              latitude: selectedPlace.location.latitude,
              longitude: selectedPlace.location.longitude,
            }}
            title={selectedPlace.name}
            description={selectedPlace.address}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapComponent;
