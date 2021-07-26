import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SubmitButton from "../SubmitButton";

export default function YourProposalsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ height: "50%", justifyContent: "space-evenly" }}>
        <Text style={{ textAlign: "center", color: "#a9a9a9", fontSize: 18 }}>
          You have not created any proposal.
        </Text>
        <SubmitButton title="Create A Proposal" textColor="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
