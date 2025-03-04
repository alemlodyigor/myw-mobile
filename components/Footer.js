import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>
        © All Rights Reserved. MyWeather created by Alemlodyigor and powered by
        WeatherAPI.com
      </Text>
      <Image
        source={{ uri: "cdn.weatherapi.com/v4/images/weatherapi_logo.png" }}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
