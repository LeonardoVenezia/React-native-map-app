import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default ({ title, ...rest }) => {
  return (
    <View style={styles.panel}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  },
});
