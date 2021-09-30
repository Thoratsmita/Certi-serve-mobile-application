import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import TransCard from "../TransCard";
import colors from "../../config/colors";
import SubmitButton from "../SubmitButton";
import { useRoute } from "@react-navigation/native";

export default function TransHistory({ data = [] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <TransCard
            title={item.company}
            subtitle={item.category}
            amount={item.amount}
            amtStyle={{ fontSize: 20, left: 150, bottom: 25 }}
            // image={item.image}
            backgroundColor="gray"
          />
        )}
      />
      <Pressable style={{ top: 20, left: 30 }}>
        <Text
          style={{
            borderRadius: 10,
            backgroundColor: colors.primary,
            padding: 10,
            width: "28%",
            color: "white",
            fontSize: 15,
          }}
        >
          {" "}
          Add Fund
        </Text>
      </Pressable>
      <Pressable style={{ left: 235, bottom: 20 }}>
        <Text
          style={{
            borderRadius: 10,
            backgroundColor: "gray",
            padding: 10,
            width: "28%",
            color: "white",
            fontSize: 15,
          }}
        >
          {" "}
          Withdraw
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 5,
    letterSpacing: 1.5,
  },
  hr: {
    height: 2,
    width: "40%",
    backgroundColor: colors.primary,
  },
  emptyTextContainer: {
    alignSelf: "center",
    margin: 10,
    // backgroundColor: "red",
    // justifyContent: "center",
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
});
