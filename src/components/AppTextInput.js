import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppTextInput({
  placeholder,
  icon,
  width = "100%",
  end,
  editable = true,
}) {
  return (
    <View style={[styles.container, { width: width }]}>
      <Icon name={icon} size={30} color="#a9a9a9" />
      <TextInput
        editable={editable}
        placeholder={placeholder}
        style={styles.text}
      />
      {end && <Text style={styles.endText}>{end}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 7,
    // height: 42,
    // borderWidth: StyleSheet.hairlineWidth,
    elevation: 1,
  },
  text: { flex: 1, fontSize: 16 },
  endText: {
    color: colors.primary,
    fontSize: 16,
  },
});
