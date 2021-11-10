import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,StatusBar } from "react-native";
import Header from "../components/Header";
import JobDetailNavigation from "../navigaton/JobDetailNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function JobDetailScreen({ navigation: { goBack }, route }) {
  const { item,user } = route.params;
  return (
    <View style={styles.container}>
      <Header onBack={() => goBack()} />
      <JobDetailNavigation item={item} user = {user.user}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:StatusBar.currentHeight
  },
});
