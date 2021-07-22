import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default ({ leftText, onPressLeft, rightText, onPressRight }) => {
  return (
    <View style={styles.panel}>
      <Button title={leftText} onPress={onPressLeft} />
      <Button title={rightText} onPress={onPressRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
