import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  useRoute,
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";
import ProposalCard from "../ProposalCard";
import Box from "../Box";
import colors from "../../config/colors";
import { proposalData } from "../../data";

export default function AllProposalScreen({ item,user }) {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    propFetcher();
  }, [isFocused]);

  const propFetcher = () => {
    fetch(
      "http://radiant-bastion-14577.herokuapp.com/api/proposals/" + item.id,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        if (!responseJson.error) {
          setData(responseJson.proposals);
        } else {
          setData(responseJson);
          setShow(true);
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };
  console.log(user.id);
  return !show ? (
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
            title={10}
            padding={10}
            textColor={colors.primary}
            marginLeft={5}
          />
        </View>
        <Text style={{ color: colors.primary }}>See All</Text>
      </View>
      {/* End of Header */}

      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ProposalCard
            title={item.name}
            rating={item.rating}
            //review={item.review}
            amount={item.bid_amount}
            days={item.days_delivered}
          />
        )}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text
        style={{ textAlign: "center", color: "#a9a9a9", fontSize: 30, top: 60 }}
      >
        No Proposals
      </Text>
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
