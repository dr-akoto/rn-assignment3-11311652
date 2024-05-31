import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import SearchBar from "./search";
import Scrolls from "./categories";
import Tasks from "./tasks";

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
      <View>
        <SearchBar />
      </View>
      <View>
        <Scrolls />
      </View>
      <View><Tasks/></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f0e8",
    padding: 15,
  
    // alignItems: "center",
    // justifyContent: "center",
  },

  header: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    // backgroundColor:"#000"
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 100, // Makes the image circular
    borderColor: "#000",
    backgroundColor: "white",
  },
});
