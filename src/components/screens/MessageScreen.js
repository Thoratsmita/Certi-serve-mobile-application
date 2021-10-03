import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import CircleAvatar from "../CircleAvatar";
import { inboxMessage } from "../../data";
import colors from "../../config/colors";
import TransCard from "../TransCard";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function MessageScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width:'30%', flexDirection: 'row' }}>
        <SimpleLineIcons name="options-vertical" size={22} style={{color:"green",left:325,top:25,paddingBottom: 30}}/>
        <EvilIcons name="search" size={32} style={{color:"green",left:255,top:24}}/>
      </View>
      <FlatList
        data={inboxMessage}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <TransCard
            title={item.name}
            subtitle={item.category}
            amount={item.unread}
            amtStyle={{ fontSize: 18, left: 210, bottom: 25, color:"green"}}
            // image={item.image}
            onPress={() => navigation.navigate("InterMessageScreen", { name:item.name, desig:item.category})}
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
