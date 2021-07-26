import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProposalCard from "../ProposalCard";
import Box from "../Box";
import colors from "../../config/colors";
import { proposalData } from "../../data";

export default function AllProposalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Total Bid:</Text>
          <Box
            title={proposalData.length}
            padding={10}
            textColor={colors.primary}
            marginLeft={5}
          />
        </View>
        <Text style={{ color: colors.primary }}>See All</Text>
      </View>
      {/* End of Header */}

      <FlatList
        data={proposalData}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ProposalCard
            title={item.title}
            rating={item.rating}
            review={item.review}
            amount={item.amount}
            days={item.days}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
