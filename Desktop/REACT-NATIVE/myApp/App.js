import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
// import SearchBar from "./SearchBar";
import Icon from "react-native-vector-icons/FontAwesome";

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

      <StatusBar style="auto" />
    </View>
  );
}
const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        // backgroundColor: "#f2f2f2",
        borderWidth: 2,
      }}
    >
      <Icon name="search" size={20} color="#888" />
      <TextInput
        placeholder="Search Here"
        style={{
          marginLeft: 10,
          flex: 1,
          backgroundColor: "#ffffff",
          marginRight: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      />
      <Icon
        name="sliders"
        size={35}
        color="white"
        style={{ backgroundColor: "#f3775b", borderRadius: 3 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f0e8",
    padding: 12,
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
