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
        justifyContent: "space-between",
       
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          width: "80%",
          height:"100%"
        }}
      >
        <Icon name="search" size={20} color="#888" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Search Here"
          style={{
            marginLeft: 10,
            flex: 1,
            backgroundColor: "#ffffff",
          }}
        />
      </View>
      <View>
        <Icon
          name="sliders"
          size={35}
          color="white"
          style={{ backgroundColor: "#f3775b", borderRadius: 3 }}
        />
      </View>
    </View>
  );
};

export default SearchBar;