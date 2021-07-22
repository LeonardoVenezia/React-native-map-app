import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import Map from "./components/Map";
import Modal from "./components/Modal";
import Panel from "./components/Panel";
import Input from "./components/Input";
import List from "./components/List";

export default () => {
  const [points, setPoints] = useState([]);
  const [title, setTitle] = useState("");
  const [pointTemp, setPointTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [modalList, setModalList] = useState(false);
  const [showMarkers, setShowMarkers] = useState(true);

  const handleSubmit = !title.length
    ? () => {}
    : () => {
        const newPoint = {
          coordinate: pointTemp,
          name: title,
        };
        setPoints([...points, newPoint]);
        setTitle("");
        setVisibility(false);
      };

  const handleLongPress = ({ nativeEvent }) => {
    setPointTemp(nativeEvent.coordinate);
    setModalList(false);
    setVisibility(true);
  };

  const handleListModal = () => {
    setModalList(true);
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        points={points}
        showMarkers={showMarkers}
      />
      <Panel
        rightText="Mostrar/Ocultar"
        leftText="Lista"
        onPressLeft={handleListModal}
        onPressRight={() => setShowMarkers(!showMarkers)}
      ></Panel>
      <Modal visibility={visibility} placeholder="Nombre del punto">
        {modalList ? (
          <List
            points={points.map((i) => i.name)}
            closeModal={() => setVisibility(false)}
          />
        ) : (
          <View style={styles.modalForm}>
            <Input
              title={"Name of marker"}
              placeholder="My house"
              onChangeText={setTitle}
            />
            <Button title="Accept" onPress={handleSubmit} />
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  modalForm: {
    padding: 10,
  },
});
