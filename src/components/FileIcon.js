import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function FileIcon({ title = "ABC.pdf" }) {
  return (
    <View style={styles.doc}>
      <View style={styles.docFooter}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  doc: {
    borderWidth: 1,
    borderColor: "#a9a9a9",
    paddingTop: 30,
    width: 120,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  docFooter: {
    padding: 10,
    borderTopWidth: 1,
    backgroundColor: "#68B921",
  },
});
