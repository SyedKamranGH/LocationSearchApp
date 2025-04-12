import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapComponent from 'components/MapView';
import SearchInput from 'components/SearchInput';
import HistoryList from 'components/HistoryList';
import { Region, Place } from 'types';
import { getSearchHistory } from 'utils/storage';
import { savePlaceToHistory } from 'services/placesService';
import styles from './styles';
import { LAHORE_PIN } from 'constants/defaultLocation';
import { MapPressEvent } from 'react-native-maps';

const MapScreen: React.FC = () => {
  const [region, setRegion] = useState<Region>(LAHORE_PIN);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [searchHistory, setSearchHistory] = useState<Place[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const history = await getSearchHistory();
      setSearchHistory(history);
    })();
  }, []);

  const handlePlaceSelected = useCallback(async (place: Place) => {
    setSelectedPlace(place);

    setRegion({
      latitude: place.location.latitude,
      longitude: place.location.longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    });

    await savePlaceToHistory(place);

    const updatedHistory = await getSearchHistory();
    setSearchHistory(updatedHistory);
    setShowHistory(false);
  }, []);

  const toggleHistory = useCallback(() => {
    setShowHistory(prev => !prev);
  }, []);

  const handleMapPress = useCallback(
    ({ nativeEvent: { coordinate } }: MapPressEvent) => {
      console.log('Map pressed at:', coordinate);
    },
    [],
  );

  return (
    <View style={styles.container}>
      <MapComponent
        region={region}
        selectedPlace={selectedPlace}
        onPress={handleMapPress}
      />

      <SearchInput onPlaceSelected={handlePlaceSelected} />

      <TouchableOpacity style={styles.historyButton} onPress={toggleHistory}>
        <Text style={styles.historyButtonText}>
          {showHistory ? 'Hide History' : 'Show History'}
        </Text>
      </TouchableOpacity>

      <View style={styles.historyContainer}>
        <HistoryList
          history={searchHistory}
          onPlaceSelect={handlePlaceSelected}
          visible={showHistory}
        />
      </View>
    </View>
  );
};

export default MapScreen;
