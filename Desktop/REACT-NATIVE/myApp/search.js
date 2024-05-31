import react from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        // backgroundColor: "#f2f2f2",
        borderWidth: 2,
        marginBottom: 20
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
export default SearchBar;
