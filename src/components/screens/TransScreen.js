import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import CircleAvatar from "../CircleAvatar";
import { transHistory } from "../../data";
import colors from "../../config/colors";
import TransHistory from "./TransHistory";

export default function TransScreen() {
  return (
    <View style={styles.container}>
      <TransHistory data={transHistory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 600,
    backgroundColor: "#fff",
  },

  input: {
    top: 25,
    width: "90%",
    left: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});
