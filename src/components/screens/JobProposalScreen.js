import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import JobCard from "../JobCard";
import colors from "../../config/colors";
import SubmitButton from "../SubmitButton";
import { useRoute } from "@react-navigation/native";

export default function JobProposalScreen({
  title,
  count = 0,
  onEmptyText,
  data = [],
  onPress,
  onPressPostJob,
  // route,
}) {
  const ListHeaderComponent = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.hr} />
      </View>
    );
  };
  const route = useRoute();
  // console.log(route.name);
  return (
    <>
      <View style={styles.container}>
        {data.length === 0 && (
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
        {data.length > 0 && (
          <FlatList
            ListHeaderComponent={ListHeaderComponent}
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <JobCard
                title={item.title}
                subtitle={item.subtitle}
                range={item.range}
                // image={item.image}
                backgroundColor="red"
                topics={item.topics}
                onPress={onPress}
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
