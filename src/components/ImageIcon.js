import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageIcon({ height, width, image }) {
  return (
    <Image
      source={image}
      style={[styles.icon, { height: height, width: width }]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 30,
    width: 60,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
