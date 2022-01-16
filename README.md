# Marker-React-Native

A react-native module to add map marker clustering in [airbnb/react-native-map](https://github.com/airbnb/react-native-maps) for both iOS and Android.

## Dependencies
```
    "expo": "~44.0.0",
    "expo-location": "~14.0.1",
    "expo-status-bar": "~1.2.0",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-native": "0.64.3",
    "react-native-maps": "0.29.4",
    "react-native-web": "0.17.1"
```

## Installation
Make sure you have `react-native-maps` installed and react native linking is done. If not then follow this for [Installation instructions](https://github.com/airbnb/react-native-maps).

Or do this :

#### Using npm
```
npm install react-native-maps --save
react-native link react-native-maps
```

#### Using Yarn
```
yarn add react-native-maps 
react-native link react-native-maps
```



## How to use?

1. Import MapView from `react-native-map-markerclustering` and Marker from `react-native-maps`
```javascript
import MapView from 'react-native-map-markerclustering';
import Marker from 'react-native-maps';
```

2. Inside render use MapView and Marker like this:
```
      <MapView
        onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        initialRegion={{
          latitude: -7.159927313492244,
          longitude: -34.896363785021184,
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
      ```
