import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";


export default function BoxInput({
  flexDirection = "row",
  placeholder,
  blurText,
  onChangeText,
}) {
  return (
    <View style={styles.box}>
      {blurText && <Text style={styles.blurText}>{blurText}</Text>}
      <View
        style={[styles.costInputContainer, { flexDirection: flexDirection }]}
      >
        <View style={styles.cost}>
          <Text style={{ fontSize: 18 }}>​​{placeholder}</Text>
        </View>
        <TextInput style={styles.costInput} onChangeText={onChangeText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  costInputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    // width: "45%",
    alignSelf: "flex-start",
    width: 150,
  },
  cost: {
    backgroundColor: "#f7f7f7",
    padding: 10,
  },
  costInput: {
    // flex: 1,
    //textAlignVertical: "top",
    paddingHorizontal: 20,
    fontSize: 18,
  },
  box: {
    marginVertical: 10,
    // flex: 1,
    // // backgroundColor: "red",
    // maxHeight: 70,
  },
});
