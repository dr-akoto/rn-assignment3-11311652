import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f2f2f2",
      }}
    >
      <Icon name="search" size={20} color="#888" />
      <TextInput
        placeholder="Search Here"
        style={{ marginLeft: 10, flex: 1 }}
      />
      <Icon name="sliders" size={20} color="#888" />
    </View>
  );
};

export default SearchBar;
