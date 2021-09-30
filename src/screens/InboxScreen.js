import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import { transHistory } from "../data";
import TransCard from "../components/TransCard";
import SubmitButton from "../components/SubmitButton";
import { AntDesign } from "@expo/vector-icons";
import MessageTopTabNavigation from "../navigaton/MessageTopTabNavigation";

export default function InboxScreen({ navigation: { goBack } }) {
  return (
    <View style={styles.container}>
      <MessageTopTabNavigation/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  title: {
    fontSize: 23,
    color: "black",
    marginVertical: 5,
    top: 110,
    left: 130,
    position: "absolute",
  },
});
