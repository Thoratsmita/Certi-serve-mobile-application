import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from "react-native";
import MessageHeader from "../components/MessageHeader";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function InterMessageScreen({ route }) {
  const navigation = useNavigation();
  const { name, desig } = route.params;
  return (
    <KeyboardAvoidingView style={styles.container} behaviour="height" enabled>

      <MessageHeader
        onBack={() => navigation.goBack()}
        name={name}
        desig={desig}
      />
      <View style={{flexDirection: 'row',justifyContent: 'space-between',bottom:30}}>
        <TextInput
          editable={true}
          placeholder={"Type your Message"}
          style={{
            fontSize: 16,
            padding: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
            width: "80%",
            height: 50,
            left:20


          }}
        />
        <Ionicons
          name="send-outline"
          size={30}
          color="green"
          style={{right:10,top:10}}
        />
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#fff",
  },

  input: {
    top: 25,
    width: "90%",
    left: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});
