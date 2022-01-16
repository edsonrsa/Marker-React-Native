import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MapView, { Marker, Callout } from "react-native-maps";

import * as Location from "expo-location";

const App = () => {
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleNewMarker = (coordinate) => {
    setMarker([...marker, coordinate]);
  };

  return (
    <View style={styles.container}>
      <MapView
        onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        initialRegion={{
          latitude: -7.149927313492244,
          longitude: -34.876363785021184,
          latitudeDelta: 0.0100,
          longitudeDelta: 0.0100,
        }}
        showsUserLocation
        loadingEnabled
        mapType="terrain"
      >
        {marker.length > 0 &&
          marker.map((m) => {
            return (
              <Marker
                coordinate={m}
                key={Math.random().toString()}
                title="Lojas de André"
                description="Uma das lojas de andré encontrada!"
              >
                <Callout style={styles.newMarker}>
                  <Text>Lojas de André</Text>
                  <Text>Contato: 83 3022-0000</Text>
                  <Text>Responsável</Text>
                </Callout>
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  map: {
    flex: 1,
  },
  newMarker: {
    height: 75,
    width: 150,

  },
});

export default App;