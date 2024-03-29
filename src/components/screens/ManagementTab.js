import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import Box from "../Box";
import MilestoneCard from "../MilestoneCard";

export default function ManagementTab({ route }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://radiant-bastion-14577.herokuapp.com/api/milestonesdisplay")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.footer}>
        {/* <Text style={styles.footerText}>Actions</Text> */}
        <Box
          title="Create A milestone"
          backgroundColor="#DFE9E4"
          padding={15}
          // marginRight={15}
          textColor="#969D9A"
          fontSize={16}
          noLimit
          // style={{ marginVertical: 10 }}
        />
        {/* <Box
          title="Create A milestone"
          backgroundColor="#DFE9E4"
          padding={15}
          marginRight={15}
          fontSize={16}
          textColor="#969D9A"
          noLimit
        /> */}
      </View>
    );
  };

  //   console.log(route.name);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        // style={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => data.id.toString()}
        ListHeaderComponent={
          route.name !== "Created Milestones"
            ? () => <View />
            : ListHeaderComponent
        }
        renderItem={({ item, index }) => (
          <MilestoneCard
            index={index + 1}
            status={
              route.name !== "Created Milestones" ? item.status : item.status
            }
            last={index + 1 === data.length}
            route={route.name}
            title={item.milestone_name}
            descs={item.milestone_description}
          />
        )}
      />

      {/* Footer Container */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    // paddingBottom: 0,

    // flexGrow: 1,
  },
  footer: {
    alignItems: "flex-end",
    // backgroundColor: "red",
    // marginBottom: 30,
    marginTop: 10,
  },
  footerText: {
    color: colors.primary,
    fontSize: 16,
  },
});
