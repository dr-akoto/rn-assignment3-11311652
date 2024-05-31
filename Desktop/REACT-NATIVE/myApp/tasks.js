// // import React from "react";
// // import { FlatList, View, Text, StyleSheet } from "react-native";

// // const data = [
// //   { id: "1", title: "Mobile Development" },
// //   { id: "2", title: "Web App Development" },
// //   { id: "3", title: "Software Engineering" },
// //   { id: "4", title: "Machine Learning" },
// //   { id: "5", title: "Artificial Intelligence" },
// //   { id: "6", title: "Cyber Security" },
// //   { id: "7", title: "Data science" },
// //   { id: "8", title: "Data Analytic" },
// // ];

// // const Tasks = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.Ongoing}>Ongoing Task</Text>
// //       <FlatList
// //         data={data}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={styles.itemContainer}>
// //             <Text style={styles.itemText}>{item.title}</Text>
// //           </View>
// //         )}
        
      
      
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: "#f7f0e8", // Optional: background color for the whole screen
// //   },
// //   itemContainer: {
// //     width: "100%", // Adjust the width as needed, '100%' to take the full width of the parent
// //     height: 130, // Set the desired height
// //     backgroundColor: "#fff", // White background color
// //     justifyContent: "center", // Center the text vertically
// //     paddingHorizontal: 20, // Padding to the left and right
// //     marginBottom: 10, // Space between items
// //     borderRadius: 10, // Optional: rounded corners
// //     borderWidth:2,
// //     borderColor:"#f0e2d3"
// //     // shadowColor: "#000", // Optional: shadow for iOS
// //     // shadowOffset: { width: 0, height: 2 },
// //     // shadowOpacity: 0.1,
// //     // shadowRadius: 2,
// //     // elevation: 2, // Optional: shadow for Android
// //   },
// //   itemText: {
// //     fontSize: 16, // Adjust the font size
// //     color: "#333", // Text color
// //   },
// //   Ongoing: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     marginBottom:15
// //   },
// // });

// // export default Tasks;

// import React from "react";
// import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";

// const data = [
//   { id: "1", title: "Mobile Development" },
//   { id: "2", title: "Web App Development" },
//   { id: "3", title: "Software Engineering" },
//   { id: "4", title: "Machine Learning" },
//   { id: "5", title: "Artificial Intelligence" },
//   { id: "6", title: "Cyber Security" },
//   { id: "7", title: "Data science" },
//   { id: "8", title: "Data Analytic" },
// ];

// const Tasks = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.Ongoing}>Ongoing Task</Text>
//       <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//         <View style={styles.flatListContainer}>
//           <FlatList
//             data={data}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.itemContainer}>
//                 <Text style={styles.itemText}>{item.title}</Text>
//               </View>
//             )}
           
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#f7f0e8",
//   },
//   scrollViewContainer: {
//     flexGrow: 1,
//   },
//   flatListContainer: {
//     flexGrow: 1,
//   },
//   itemContainer: {
//     width: "100",
//     height: 130,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     marginHorizontal: "1%",
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#f0e2d3",
//   },
//   itemText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   Ongoing: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
// });

// export default Tasks;
import React from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";

const data = [
  { id: "1", title: "Mobile Development" },
  { id: "2", title: "Web App Development" },
  { id: "3", title: "Software Engineering" },
  { id: "4", title: "Machine Learning" },
  { id: "5", title: "Artificial Intelligence" },
  { id: "6", title: "Cyber Security" },
  { id: "7", title: "Data science" },
  { id: "8", title: "Data Analytic" },
];

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Ongoing}>Ongoing Task</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
          numColumns={1} // Render items in a single column
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f7f0e8",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    width: "100%",
    height: 130,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#f0e2d3",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  Ongoing: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default Tasks;