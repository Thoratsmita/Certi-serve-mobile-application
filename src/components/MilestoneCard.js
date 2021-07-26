import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Box from "./Box";

export default function MilestoneCard({ status, route, index, last }) {
  const topics = ["Time", "Amount"];
  const TextColor = (e) => {
    if (e === "Pending") return "#ff0000";
    if (e === "Approved") return colors.primary;
    return "#979797";
  };
  return (
    <View
      style={[
        styles.container,
        { marginTop: index === 1 ? 30 : 10, marginBottom: last ? 30 : 10 },
      ]}
    >
      <Text style={styles.headerText}>{index}. Milestone Description</Text>
      <Text>
        Aute proident dolore anim adipisicing commodo consequat cillum velit
        qui. Aute est nostrud incididunt exercitation ex sunt excepteur dolor
        mollit sit cupidatat. Ut sunt eiusmod eu pariatur nulla dolore proident.
        Esse laborum labore non id nostrud.
      </Text>
      {/* Footer */}
      <View style={[styles.footer, { justifyContent: "space-between" }]}>
        {/* <View style={styles.footer}> */}
        <FlatList
          data={topics}
          horizontal
          // style={{ width: "100%" }}
          keyExtractor={(data, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Box
              title={item}
              backgroundColor={index % 2 !== 0 ? colors.primary : "#DEDEDE"}
              padding={15}
              textColor={index % 2 !== 0 ? colors.white : "#979797"}
              marginRight={15}
            />
          )}
        />

        {/* <Box title="Remote" backgroundColor="#a9a9a9" padding={10} /> */}
        <Box
          title={status}
          backgroundColor="#DEDEDE"
          padding={15}
          textColor={TextColor(status)}
          // marginRight={15}
          style={{ alignSelf: "flex-end" }}
          noLimit
        />
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 10,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#848484",
  },
  footer: {
    flexDirection: "row",
    paddingBottom: 2,
    marginTop: 5,
    // backgroundColor: "yellow",
  },
});
