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

/**
 * The main screen component that displays the map, search input, and history list.
 *
 * @component
 * @returns {React.ReactElement} The rendered MapScreen component
 */

const MapScreen: React.FC = () => {
  const [region, setRegion] = useState<Region>(LAHORE_PIN);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [searchHistory, setSearchHistory] = useState<Place[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  /**
   * Loads the search history from storage.
   */
  const loadHistory = async () => {
    const history = await getSearchHistory();
    setSearchHistory(history);
  };

  // Load search history on component mount
  useEffect(() => {
    loadHistory();
  }, []);

  /**
   * Handles when a place is selected from the search results or history.
   * Updates the map region, saves the place to history, and updates the history list.
   *
   * @param {Place} place - The selected place
   */
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

  /**
   * Toggles the visibility of the history list.
   */
  const toggleHistory = () => {
    setShowHistory(prevState => !prevState);
  };

  /**
   * Handles when the map is pressed.
   *
   * @param {MapPressEvent} _event - The map press event
   */
  const handleMapPress = (_event: MapPressEvent) => {
    // If you need logging in development,
    // consider using a logger utility,
    // Conditional logging or
    // Require to implement something with coordinate
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
