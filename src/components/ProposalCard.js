import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Box from "./Box";
import CircleAvatar from "./CircleAvatar";

export default function ProposalCard({ title, rating, review, amount, days }) {
  const star = () => {
    let star = "";
    for (let i = 0; i < rating; i++) {
      star = star + "⭐";
    }
    // console.log(star);
    return star;
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <CircleAvatar
          radius={55 / 2}
          inline
          outline
          borderColor={colors.primary}
        />
        <View>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Box title={rating} padding={15} textColor={colors.primary} />
            <View>
              <Text style={{ fontSize: 12 }}>{star()}</Text>
            </View>
          </View>
          <Text style={styles.text}>{review} Reviews</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 4,
            alignItems: "center",
          }}
        >
          <Text>₦{amount}</Text>
        </View>
        <Text style={{ fontSize: 12, color: "#a9a9a9" }}>In {days} Days</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderRadius: 15,
    // borderWidth: 1,
    marginVertical: 10,
    // borderColor: "#a9a9a9a9",
    elevation: 2,
  },
  image: {
    height: 55,
    width: 55,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 55 / 2,
    marginRight: 10,
  },
  text: {
    fontSize: 10,
  },
});
