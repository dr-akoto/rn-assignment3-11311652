// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View>
//           <Text style={styles.text}>Hello , Devs</Text>
//           <Text>14 tasks today</Text>
//         </View>
//         <View style={styles.image}>
//           <Image
//             style={styles.tinyLogo}
//             source={require("./assets/images/profile.png")}
//           />
//         </View>
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f7f0e8",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   header: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   text: {
//     fontSize: 30,
//     fontWeight: "bold",
//     // backgroundColor:"#000"
//   },
//   tinyLogo: {
//     width: 80,
//     height: 80,
//     borderRadius: 100, // Makes the image circular

//     borderColor: "#000",
//     backgroundColor: "white",
//   },
// });
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>Hello, Devs</Text>
          <Text>14 tasks today</Text>
        </View>
        <View style={styles.image}>
          <Image
            style={styles.tinyLogo}
            source={require("./assets/images/profile.png")}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f0e8",
    padding: 12,
    // alignItems: "center",
    // justifyContent: "center",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    // backgroundColor:"#000"
  },
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 100, // Makes the image circular
    borderColor: "#000",
    backgroundColor: "white",
  },
});
