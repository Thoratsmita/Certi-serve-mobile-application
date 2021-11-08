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

import colors from "../config/colors";
import Header from "../components/Header";
import SubmitButton from "../components/SubmitButton";
import { AntDesign } from "@expo/vector-icons";
import FileIcon from "../components/FileIcon";

export default function Profile_Server({ navigation: { goBack } }) {
  const [edit, setEdit] = useState(false);

  const EditDetails = ({ placeholder, editable, onPress, secure = false }) => {
    return (
      <View style={{ flex: 1, height: 50 }}>
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
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "row",
          height: 240,
          marginBottom: 180,
        }}
      >
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
          onPress={() => alert("Any changes will need to be verified by Admin.")}
        />
      </View>
      <View style={{ flex: 1, bottom: 190 }}>
        <EditDetails placeholder="+918595974012" editable={edit} />
        <EditDetails placeholder="adi.walia@gmail.com" editable={edit} />
        <EditDetails placeholder="Chennai, India" editable={edit} />
        <EditDetails placeholder="1234568" editable={edit} secure={true} />

        <Text style={{ color: colors.secondary, fontSize: 20, left: 25 }}>
          Professional Details
        </Text>
        <Text style={{ color: "black", fontSize: 17, left: 25, top: 16 }}>
          Bio
        </Text>
        <TextInput
          placeholder="Describe Yourself."
          multiline={true}
          numberOfLines={7}
          style={{
            textAlignVertical: "top",
            borderColor: "#d3d3d3",
            borderWidth: 1,
            borderRadius: 10,
            width: "85%",
            top: 30,
            left: 24,
            padding: 10,
          }}
        />

        <Text style={{ color: "black", fontSize: 17, left: 25, top: 40 }}>
          Add Education
        </Text>
        <TextInput
          placeholder={
            "ADC Institute Of Technology\nStream/Course\nStart - End"
          }
          multiline={true}
          numberOfLines={4}
          style={{
            textAlignVertical: "top",
            borderColor: "#d3d3d3",
            borderWidth: 1,
            borderRadius: 10,
            width: "85%",
            top: 54,
            left: 24,
            padding: 10,
          }}
        />

        <Text style={{ color: "black", fontSize: 17, left: 25, top: 70 }}>
          Work Experience
        </Text>
        <TextInput
          placeholder={"ADC Company, Delhi\nProfile\nStart - End"}
          multiline={true}
          numberOfLines={4}
          style={{
            textAlignVertical: "top",
            borderColor: "#d3d3d3",
            borderWidth: 1,
            borderRadius: 10,
            width: "85%",
            top: 84,
            left: 24,
            padding: 10,
          }}
        />

        <TextInput
          placeholder={"ADC Company, Delhi\nProfile\nStart - End"}
          multiline={true}
          numberOfLines={4}
          style={{
            textAlignVertical: "top",
            borderColor: "#d3d3d3",
            borderWidth: 1,
            borderRadius: 10,
            width: "85%",
            top: 94,
            left: 24,
            padding: 10,
          }}
        />
        <Text style={{ color: "black", fontSize: 17, left: 25, top: 104 }}>
          Select Your Interests
        </Text>

        <Text
          style={{
            color: "gray",
            borderWidth: 1,
            borderColor: "#d3d3d3",
            borderRadius: 10,
            width: "35%",
            padding: 5,
            top: 115,
            left: 30,
          }}
        >
          Machine Learning
        </Text>
        <Text style={{ color: "black", fontSize: 17, left: 25, top: 125 }}>
          CV
        </Text>
        <View style={{ top: 140, left: 30 }}>
          <FileIcon />
        </View>
        <Pressable></Pressable>
        <Text
          style={{
            color: "gray",
            borderWidth: 1,
            borderColor: "#d3d3d3",
            borderRadius: 15,
            width: "25%",
            padding: 9,
            top: 75,
            left: 170,
          }}
        >
          Update CV
        </Text>
        <Pressable>
          <Text
            style={{
              backgroundColor: "green",
              padding: 15,
              width: "24%",
              fontSize: 18,
              left: 140,
              top: 160,
              paddingLeft: 20,
              borderRadius: 10,
              color: "white",
            }}
          >
            SAVE
          </Text>
        </Pressable>
      </View>
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
