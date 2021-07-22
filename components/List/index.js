import React from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Button,
} from "react-native";

export default ({ points, closeModal }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={points}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
      <View style={styles.button}>
        <Button title="Close" onPress={closeModal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 350,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 15,
  },
  button: {
    paddingBottom: 15,
  },
});
