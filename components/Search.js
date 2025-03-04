import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const Search = () => {
  const [city, setCity] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Search city"
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
