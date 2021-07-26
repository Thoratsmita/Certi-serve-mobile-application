import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Box from "./Box";
import SubmitButton from "./SubmitButton";

export default function Footer(rating) {
  const star = ({ rating }) => {
    let star = "";
    for (let i = 0; i < rating; i++) {
      star = star + "⭐";
    }
    // console.log(star);
    return star;
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Employer From: 🇮🇳</Text>
        <View style={{ flexDirection: "row" }}>
          <Box
            title="3.0"
            padding={10}
            textColor={colors.primary}
            fontSize={10}
          />
          <Text style={styles.text}>
            <Text style={{ fontSize: 14 }}>{star({ rating: 3 })}</Text>
          </Text>
        </View>
        <Text style={styles.footText}>Payment Verified</Text>
      </View>
      <SubmitButton
        title="Place Bid"
        borderRadius={10}
        textColor={colors.primary}
        backgroundColor={colors.white}
        paddingHorizontal={10}
        textTransform="captalize"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 9,
    justifyContent: "space-between",
    // shadowColor: "#000",
  },
  text: {
    fontSize: 12,
  },
  footText: {
    fontSize: 9,
    color: colors.primary,
  },
});
