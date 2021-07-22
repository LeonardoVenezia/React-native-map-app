import React from "react";
import { View, Text, StyleSheet, Modal, Dimensions } from "react-native";

export default ({ visibility, children }) => {
  return (
    <Modal animationType="slide" visible={visibility} transparent={true}>
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    minWidth: Dimensions.get("window").width - 100,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
