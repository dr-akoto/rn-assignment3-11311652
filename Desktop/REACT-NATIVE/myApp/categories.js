import React from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";

const data = [
  { id: "1", image: require("./assets/images/whiteshirt.png") },
  { id: "2", image: require("./assets/images/chairwoman.png") },
  { id: "1", image: require("./assets/images/whiteshirt.png") },
  { id: "2", image: require("./assets/images/chairwoman.png") },
  { id: "1", image: require("./assets/images/whiteshirt.png") },
  { id: "2", image: require("./assets/images/chairwoman.png") },
  { id: "1", image: require("./assets/images/whiteshirt.png") },
  { id: "2", image: require("./assets/images/chairwoman.png") },
  { id: "1", image: require("./assets/images/whiteshirt.png") },
  { id: "2", image: require("./assets/images/chairwoman.png") },
];

const renderItem = ({ item }) => (
  <Image source={item.image} style={styles.image} />
);

const Scrolls = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>Categories</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
    margin: 10,
    borderRadius: 10,
    backgroundColor:"#fff"
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Scrolls;
