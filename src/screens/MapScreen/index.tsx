import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import MapComponent from 'components/MapView';
import SearchInput from 'components/SearchInput';
import HistoryList from 'components/HistoryList';
import { Region, Place } from 'types';
import { getSearchHistory } from 'utils/storage';
import { savePlaceToHistory } from 'services/placesService';
import styles from './styles';
import { LAHORE_PIN } from 'constants/defaultLocation';
import { MapPressEvent } from 'react-native-maps';
import HistoryToggleButton from './components/HistoryToggleButton';

const MapScreen: React.FC = () => {
  const [region, setRegion] = useState<Region>(LAHORE_PIN);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [searchHistory, setSearchHistory] = useState<Place[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const loadHistory = async () => {
    const history = await getSearchHistory();
    setSearchHistory(history);
  };

  useEffect(() => {
    loadHistory();
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

  const toggleHistory = () => {
    setShowHistory(prevState => !prevState);
  };

  const handleMapPress = (_event: MapPressEvent) => {
    // If you need logging in development, consider using a logger utility or conditional logging or require to implement something with coordinate
  };

  return (
    <View style={styles.container}>
      <MapComponent
        region={region}
        selectedPlace={selectedPlace}
        onPress={handleMapPress}
      />

      <SearchInput onPlaceSelected={handlePlaceSelected} />

      <HistoryToggleButton showHistory={showHistory} onToggle={toggleHistory} />

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

export default React.memo(MapScreen);
