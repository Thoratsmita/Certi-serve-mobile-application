import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CircleAvatar from "./CircleAvatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Box from "./Box";

export default function TransCard({
  title,
  subtitle,
  image,
  backgroundColor,
  onPress,
  amount,
  amtStyle
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={[styles.header, { justifyContent: "space-between" }]}>
        <View style={styles.header}>
          <CircleAvatar
            radius={30}
            icon={image}
            backgroundColor={backgroundColor}
          />
          <View>
            <Text style={{ fontSize: 20 }}>{title}</Text>
            <Text style={{ fontSize: 12 }}>{subtitle}</Text>
            <Text style={amtStyle}>
              {amount}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 5,
    backgroundColor: colors.white,
    elevation: 1,
    marginHorizontal: 15,
    borderRadius: 10,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#909090",
  },
  header: {
    flexDirection: "row",
  },
  footer: {
    flexDirection: "row",
    paddingBottom: 2,
    // backgroundColor: "yellow",
  },
  box: {
    backgroundColor: "#a9a9a9",
  },
});
