import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

export default function RadioButton() {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[{ flexDirection: "row", marginVertical: 10 }]}
    >
      <View style={[styles.radio]}>
        {selected ? <View style={styles.radioCircle} /> : null}
      </View>
      <Text style={{ fontSize: 16 }}>Category</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  radioCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
});
