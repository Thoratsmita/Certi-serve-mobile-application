import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import CircleAvatar from "../CircleAvatar";
import { bankCards } from "../../data";
import colors from "../../config/colors";
import TransCard from "../TransCard";

export default function SavedTransScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={bankCards}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.input}>
            <Text style={{ color: "white", fontSize: 20 }}>{item.bank}</Text>
            <Text style={{ color: "white", fontSize: 20 }}>{item.code}</Text>
          </View>
        )}
      />
      <Pressable style={{ left: 117, bottom: 20 }}>
        <Text
          style={{
            borderRadius: 10,
            backgroundColor: "gray",
            padding: 10,
            width: "33%",
            color: "white",
            fontSize: 20,
          }}
        >
          {" "}
          Add Card
        </Text>
      </Pressable>
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
    backgroundColor: colors.primary,
    width: "70%",
    borderRadius: 10,
    padding: 30,
    marginTop: 20,
    left: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
