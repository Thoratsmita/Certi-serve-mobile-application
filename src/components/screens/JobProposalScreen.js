import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import JobCard from "../JobCard";
import colors from "../../config/colors";
import SubmitButton from "../SubmitButton";
import { useRoute, useNavigation,useIsFocused } from "@react-navigation/native";

export default function JobProposalScreen({
  title,
  count,
  onEmptyText,
  onPress,
  onPressPostJob,
  user
  // route,
}) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    jobFetcher();
  }, [isFocused]);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.hr} />
      </View>
    );
  };

  const [data, setData] = useState([]);

  const jobFetcher = () => {
    fetch("http://radiant-bastion-14577.herokuapp.com/api/jobsdisplay", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setData(responseJson);
      })

      .catch((error) => {
        console.error(error);
      });
  };
  //console.log(data[0]);
  // console.log(route.name);
  return (
    <>
      <View style={styles.container}>
        {(data.length === 0 || count==0) && (
          <>
            {title && (
              <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.hr} />
              </View>
            )}
            <View style={styles.emptyTextContainer}>
              <Text
                style={[styles.text, { letterSpacing: 0.5, color: "#a9a9a9" }]}
              >
                {onEmptyText}
              </Text>
              {onPressPostJob && (
                <SubmitButton
                  title="Post A Job"
                  textColor="#fff"
                  onPress={onPressPostJob}
                />
              )}
            </View>
          </>
        )}
        {(data.length > 0 && count!=0) && (
          <FlatList
            ListHeaderComponent={ListHeaderComponent}
            data={data}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => (
              <JobCard
                title={item.job_title}
                subtitle={item.job_location}
                range={item.job_incentives}
                // image={item.image}
                backgroundColor="red"
                topics={item.tags}
                onPress={() => navigation.navigate("JobDetail", { item: item })}
              />
            )}
          />
        )}
      </View>
    </>
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
