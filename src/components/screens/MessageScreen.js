import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import CircleAvatar from "../CircleAvatar";
import { inboxMessage } from "../../data";
import colors from "../../config/colors";
import TransCard from "../TransCard";

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={inboxMessage}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <TransCard
            title={item.name}
            subtitle={item.category}
            amount={item.unread}
            amtStyle={{ fontSize: 20, left: 210, bottom: 25, color:"green"}}
            // image={item.image}
            backgroundColor="gray"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
