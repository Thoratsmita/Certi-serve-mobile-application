import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import CircleAvatar from "../components/CircleAvatar";
import colors from "../config/colors";
import JobsTopTabNavigation from "../navigaton/JobsTopTabNavigation";

export default function AllJobsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/adaptive-icon.png")}
        />
      </View>
      <View style={styles.body}>
        <View
          style={{
            position: "absolute",
            top: -70,
            zIndex: 10,
            left: 15,
          }}
        >
          <CircleAvatar radius={50} inline />
        </View>
        <View style={styles.bar}>
          <View
            style={{
              width: "60%",
              backgroundColor: colors.primary,
              height: "100%",
            }}
          />
        </View>
        <View>
          <View style={{ padding: 15, paddingTop: 8 }}>
            <View style={{ width: 100 }}>
              <Text style={styles.text}>David ray</Text>
              <Text style={[styles.text, { fontSize: 12 }]}>@David</Text>
            </View>
            <AppTextInput placeholder="" icon="search-web" />
          </View>
        </View>
        <JobsTopTabNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // backgroundColor: "red",
    flex: 0.8,
  },
  body: {
    // backgroundColor: "yellow",
    flex: 2,
  },
  text: {
    textAlign: "center",
  },
  bar: {
    height: 20,
    // backgroundColor: "red",
    alignItems: "flex-end",
  },
});
