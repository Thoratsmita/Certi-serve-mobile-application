import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function SubmitButton({
  title,
  onPress,
  borderRadius = 20,
  textColor = "#a9a9a9",
  fontSize = 20,
  backgroundColor = colors.primary,
  paddingHorizontal = 15,
  textTransform = "uppercase",
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          paddingHorizontal: paddingHorizontal,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: textColor,
            fontSize: fontSize,
            textTransform: textTransform,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 7,
    alignItems: "center",
    width: "60%",
    borderRadius: 20,
    marginVertical: 10,
    alignSelf: "center",
    elevation: 1.5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#909090",
  },
  title: {
    color: "#a9a9a9",
  },
});
