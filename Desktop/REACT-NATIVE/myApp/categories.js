// import React from "react";
// import { View, FlatList, Image, StyleSheet, Text } from "react-native";

// const data = [
//   {
//     id: "9",
//     label: "White Shirt",
//     image: require("./assets/images/whiteshirt.png"),
//   },
//   {
//     id: "10",
//     label: "Chairwoman",
//     image: require("./assets/images/chairwoman.png"),
//   },

//   {
//     id: "9",
//     label: "White Shirt",
//     image: require("./assets/images/whiteshirt.png"),
//   },
//   {
//     id: "10",
//     label: "Chairwoman",
//     image: require("./assets/images/chairwoman.png"),
//   },
//   {
//     id: "9",
//     label: "White Shirt",
//     image: require("./assets/images/whiteshirt.png"),
//   },
//   {
//     id: "10",
//     label: "Chairwoman",
//     image: require("./assets/images/chairwoman.png"),
//   },
//   {
//     id: "9",
//     label: "White Shirt",
//     image: require("./assets/images/whiteshirt.png"),
//   },
//   {
//     id: "10",
//     label: "Chairwoman",
//     image: require("./assets/images/chairwoman.png"),
//   },
//   {
//     id: "9",
//     label: "White Shirt",
//     image: require("./assets/images/whiteshirt.png"),
//   },
//   {
//     id: "10",
//     label: "Chairwoman",
//     image: require("./assets/images/chairwoman.png"),
//   },
// ];

// const renderItem = ({ item }) => (
//   <View style={styles.imageContainer}>
//     <Image source={item.image} style={styles.image} />
//     <Text style={styles.imageLabel}>{item.label}</Text>
//   </View>
// );

// const Scrolls = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.category}>Categories</Text>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#f7f0e8",
//   },
//   imageContainer: {
//     width: 180,
//     height: 220,
//     margin: 10,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//     elevation: 5, // Add shadow for Android
//     shadowColor: "#000", // Add shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//   },
//   image: {
//     width: 180,
//     height: 180,
//     borderRadius: 10,
//   },
//   imageLabel: {
//     position: "absolute",
//     bottom: 10,
//     left: 10,
//     right: 10,
//     textAlign: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//     color: "#fff",
//     padding: 5,
//     borderRadius: 5,
//   },
//   category: {
//     fontSize: 25,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
// });

// export default Scrolls;
import React from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";

const data = [
  { id: "1", image: require("./assets/images/whiteshirt.png"), label: "White Shirt" },
  { id: "2", image: require("./assets/images/chairwoman.png"), label: "Chairwoman" },
  { id: "3", image: require("./assets/images/whiteshirt.png"), label: "White Shirt" },
  { id: "4", image: require("./assets/images/chairwoman.png"), label: "Chairwoman" },
  { id: "5", image: require("./assets/images/whiteshirt.png"), label: "White Shirt" },
  { id: "6", image: require("./assets/images/chairwoman.png"), label: "Chairwoman" },
  { id: "7", image: require("./assets/images/whiteshirt.png"), label: "White Shirt" },
  { id: "8", image: require("./assets/images/chairwoman.png"), label: "Chairwoman" },
  { id: "9", image: require("./assets/images/whiteshirt.png"), label: "White Shirt" },
  { id: "10", image: require("./assets/images/chairwoman.png"), label: "Chairwoman" },
];

const renderItem = ({ item }) => (
  <View style={styles.imageContainer}>
    <Text style={styles.imageLabel}>{item.label}</Text>
    <Image source={item.image} style={styles.image} />
  </View>
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
    padding: 10,
    backgroundColor: "#f7f0e8",
  },
  imageContainer: {
    width: 180,
    height: 220,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    elevation: 5, // Add shadow for Android
    shadowColor: "#000", // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  imageLabel: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
  },
  category: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Scrolls;
