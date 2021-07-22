import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default ({ onLongPress, points, showMarkers }) => {
  return (
    <MapView
      camera={{
        center: {
          latitude: -34.665320954826925,
          longitude: -58.72760105878115,
        },
        pitch: 10,
        heading: 10,
        altitude: 10,
        zoom: 15,
      }}
      onLongPress={onLongPress}
      style={styles.mapView}
    >
      {showMarkers &&
        !!points.length &&
        points.map((p) => {
          return (
            <Marker key={p.name} coordinate={p.coordinate} title={p.name} />
          );
        })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapView: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width,
  },
});
