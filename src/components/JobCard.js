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

export default function JobCard({
  title,
  subtitle,
  range,
  image,
  topics,
  backgroundColor,
  onPress,
}) {
  const [liked, setLiked] = useState(false);
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
            <Text style={{ fontSize: 12, color: colors.primary }}>
              {range}/Hour
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <MaterialCommunityIcons
            name={liked ? "heart" : "heart-outline"}
            size={30}
            color={liked ? colors.primary : "#909090"}
          />
        </TouchableOpacity>
      </View>
      {/* Footer */}
      <View style={[styles.footer, { justifyContent: "space-between" }]}>
        {/* <View style={styles.footer}> */}
        <FlatList
          data={topics}
          horizontal
          // style={{ flex: 1 }}
          keyExtractor={(data, index) => index.toString()}
          renderItem={({ item }) => (
            <Box
              title={item}
              backgroundColor="#DEDEDE"
              padding={15}
              marginRight={15}
            />
          )}
        />

        {/* <Box title="Remote" backgroundColor="#a9a9a9" padding={10} /> */}
        <Box
          title="Status"
          backgroundColor={colors.primary}
          padding={10}
          textColor="#fff"
          padding={15}
          style={{ alignSelf: "flex-end" }}
        />
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 5,
    backgroundColor: colors.white,
    elevation: 1,
    marginHorizontal: 15,
    borderRadius: 10,
    margin: 20,
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
