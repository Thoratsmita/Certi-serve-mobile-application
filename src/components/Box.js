import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function Box({
  title,
  backgroundColor = colors.white,
  textColor = "#000",
  marginRight,
  padding,
  fontSize = 12,
  marginLeft,
  noLimit,
  style,
}) {
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          padding: padding,
          paddingVertical: 5,
          borderRadius: 5,
          marginRight: marginRight,
          marginLeft: marginLeft,
          // borderWidth: border ? 1 : 0,
          // borderColor: "#a9a9a9",
          elevation: 1,
        },
        noLimit ? null : { maxWidth: 120 },
        style,
      ]}
    >
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: textColor,
          fontSize: fontSize,
          letterSpacing: 1.2,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
