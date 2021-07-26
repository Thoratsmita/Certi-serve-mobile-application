import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function OnBoardingTab({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>{title}</Text>
        <View style={styles.hr} />
        <Text style={[styles.text, { fontSize: 25 }]}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "70%",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    // fontWeight: "bold",
    textAlign: "center",
  },
  hr: {
    height: 4,
    width: "100%",
    borderRadius: 2,
    backgroundColor: colors.secondary,
    marginVertical: 10,
  },
});
