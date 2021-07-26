import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function CircleAvatar({
  radius,
  outline,
  borderColor,
  inline,
  title,
  subtitle,
  style,
  icon,
  backgroundColor = "transparent",
}) {
  return (
    <View style={[styles.container, style]}>
      <View
        style={{
          height: radius * 2,
          width: radius * 2,
          borderRadius: radius,
          borderColor: borderColor,
          padding: outline ? 5 : 0,
          borderWidth: outline ? 2 : 0,
          marginRight: 10,
          backgroundColor: backgroundColor,
          overflow: "hidden",
        }}
      >
        {icon && (
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: radius,
              borderColor: inline ? colors.primary : colors.secondary,
              borderWidth: inline ? 1 : 0,
              padding: 5,
              overflow: "hidden",
            }}
            source={icon}
          />
        )}
      </View>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    opacity: 0.8,
  },
  subtitle: {
    color: "#909090",
  },
});
