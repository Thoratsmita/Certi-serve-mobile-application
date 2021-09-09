import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Box from "./Box";

export default function MilestoneCard({
  status,
  route,
  index,
  last,
  title,
  descs,
}) {
  const topics = ["Time", "Amount"];
  const TextColor = (e) => {
    if (e === "Pending") return "#ff0000";
    if (e === "Approved") return colors.primary;
    if (e === "Yet to release") return "#ffffff";

    return "#979797";
  };
  const BackgroundColor = (e) => {
    if (e === "Yet to release") return "#747474";

    return "#DEDEDE";
  };
  return (
    <View
      style={[
        styles.container,
        { marginTop: index === 1 ? 30 : 10, marginBottom: last ? 30 : 10 },
      ]}
    >
      <Text style={styles.headerText}>
        {index}. {title}
      </Text>
      <Text>{descs}</Text>
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
              backgroundColor={BackgroundColor(item)}
              padding={15}
              textColor="#8c8c8c"
              marginRight={10}
            />
          )}
        />

        {/* <Box title="Remote" backgroundColor="#a9a9a9" padding={10} /> */}
        {route !== "Created Milestones" && (
          <Box
            title={status}
            backgroundColor={BackgroundColor(status)}
            padding={15}
            textColor={TextColor(status)}
            // marginRight={15}
            style={{ alignSelf: "flex-end", width: 130, alignItems: "center" }}
            noLimit
          />
        )}
        {route === "Created Milestones" && (
          <>
            <Box
              title="Approve"
              backgroundColor={colors.primary}
              padding={15}
              textColor="#ffffff"
              // marginRight={15}
              style={{
                alignSelf: "flex-end",
                // width: 90,
                marginRight: 5,
              }}
              noLimit
            />
            <Box
              title="Reject"
              backgroundColor="#BE5959"
              padding={15}
              textColor="#ffffff"
              // marginRight={15}
              style={{
                alignSelf: "flex-end",
                // width: 90,
              }}
              noLimit
            />
          </>
        )}
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
