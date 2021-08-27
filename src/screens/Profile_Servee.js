import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
} from "react-native";

import Header from "../components/Header";
import SubmitButton from "../components/SubmitButton";
import { AntDesign } from "@expo/vector-icons";

export default function Profile_Servee({ navigation: { goBack } }) {
  const [edit, setEdit] = useState(false);

  const EditDetails = ({ placeholder, editable, onPress, secure = false }) => {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", height: 50 }}>
        <Pressable onPress={onPress}>
          <TextInput
            style={{
              fontSize: 18,
              left: 20,
              color: "gray",
              borderBottomWidth: 1,
              borderBottomColor: "green",
              width: "90%",
            }}
            secureTextEntry={secure}
            editable={editable}
            defaultValue={placeholder}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#fff", flexDirection: "row" }}>
        <Header
          topic=" "
          icon=""
          onBack={() => goBack()}
          radius={40}
          title={true}
        />
        <TextInput
          style={styles.title}
          defaultValue="David Ray"
          editable={edit}
          autoFocus={true}
        />
        <AntDesign
          style={{ position: "absolute", top: 123, left: 240 }}
          name="edit"
          size={23}
          color="gray"
          onPress={() => setEdit(!edit)}
        />
      </View>
      <EditDetails placeholder="+918595974012" editable={edit} />
      <EditDetails placeholder="adi.walia@gmail.com" editable={edit} />
      <EditDetails placeholder="Chennai, India" editable={edit} />
      <EditDetails placeholder="1234568" editable={edit} secure={true} />
      <Pressable>
        <Text
          style={{
            backgroundColor: "green",
            padding: 15,
            width: "24%",
            fontSize: 18,
            left: 140,
            paddingLeft: 20,
            borderRadius: 10,
            color: "white",
          }}
        >
          SAVE
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
