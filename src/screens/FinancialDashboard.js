import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import Header from "../components/Header";
import SubmitButton from "../components/SubmitButton";
import FinanceDashTopTabNavigation from "../navigaton/FinanceDashTopTabNavigation";

export default function FinancialDashboard({
  navigation: { navigate, goback },
}) {
  return (
    <View style={styles.container}>
      <FinanceDashTopTabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },

  input: {
    top: 25,
    width: "90%",
    left: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});
