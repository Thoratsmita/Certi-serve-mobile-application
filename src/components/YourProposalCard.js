import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Box from "./Box";
import CircleAvatar from "./CircleAvatar";

export default function YourProposalCard({
  title,
  rating,
  review,
  amount,
  days,
}) {
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
      <Text style={{ color: "#818181" }}>
        Incididunt nulla duis minim occaecat magna eiusmod aute. Culpa fugiat
        sit sunt enim nulla aliqua aliquip duis ipsum esse. Do deserunt dolor
        aliquip ut aute et ea voluptate. Laborum quis enim aute qui.
      </Text>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Box
            title="​​₦ 140"
            textColor="#fff"
            fontSize={16}
            backgroundColor={colors.primary}
            padding={15}
            style={{ marginRight: 10 }}
          />
          <Box
            title="12Days"
            textColor="#fff"
            fontSize={16}
            backgroundColor={colors.primary}
            padding={15}
          />
        </View>
        <Box
          title="Status"
          textColor="#fff"
          fontSize={16}
          backgroundColor={colors.primary}
          padding={10}
          //   style={{ righ}}
        />
      </View>
      <View style={styles.content}>
        <Box
          title="Milestone 1 description"
          backgroundColor="#dfdfdf"
          textColor="#797979"
          fontSize={16}
          noLimit
          style={{ padding: 5, width: "60%" }}
        />
        <Box
          title="Status"
          //   textColor="#fff"
          fontSize={16}
          backgroundColor="#dfdfdf"
          padding={10}
          //   style={{ righ}}
        />
      </View>
      <View style={styles.content}>
        <Box
          title="Milestone 1 description"
          backgroundColor="#dfdfdf"
          textColor="#797979"
          fontSize={16}
          noLimit
          style={{ padding: 5, width: "60%" }}
        />
        <Box
          title="Status"
          //   textColor="#fff"
          fontSize={16}
          backgroundColor="#dfdfdf"
          padding={10}
          //   style={{ righ}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    // height: 100,
    // alignItems: "center",
    // flexDirection: "row",
    padding: 8,
    // justifyContent: "space-between",
    borderRadius: 15,
    // borderWidth: 1,
    marginVertical: 10,
    // borderColor: "#a9a9a9a9",
    elevation: 2,
    // paddingVertical
    // paddingHorizontal: 15,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
