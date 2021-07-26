import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ManagementNavigation from "../../navigaton/ManagementNavigation";

export default function ManagementScreen() {
  return <ManagementNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
