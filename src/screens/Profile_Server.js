import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Button
} from "react-native";

import colors from "../config/colors";
import Header from "../components/Header";
import SubmitButton from "../components/SubmitButton";
import { AntDesign } from "@expo/vector-icons";
import FileIcon from "../components/FileIcon";

export default function Profile_Server({ user }) {
  const [edit, setEdit] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userNum, setUserNum] = useState("");
  const [userPass, setUserPass] = useState("");
  const [edu, setEdu] = useState("");
  const [bio, setBio] = useState("");
  const [rate, setRate] = useState("");
  const [addr, setAddr] = useState("");
  const [work, setWork] = useState("");
  console.log(user);
  const EditDetails = ({
    placeholder,
    editable,
    onPress,
    secure = false,
    onChangeText,
  }) => {
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
            onChangeText={() => onChangeText}
            secureTextEntry={secure}
            editable={editable}
            defaultValue={placeholder}
          />
        </Pressable>
      </View>
    );
  };

  const handleSubButton = () => {


    var dataToSend = {
      freelancer_id: user.id,
      skill_id: "5",
      job_id: "23",
      professional_title: bio,
      education: edu,
      work_experience: work,
      certifications: "abc xyz",
      availability: "3",
      expected_hourly_rate: "5",
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://radiant-bastion-14577.herokuapp.com/api/freelancerPortfolio/create", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        if (responseJson.msg === "User created successfully") {
          alert("Registration Successful!");
          navigate("Login");
        } else {
          alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
          defaultValue={user.user.name}
          editable={edit}
          autoFocus={true}
        />
      </View>
      <View style={{ flex: 1, bottom: 190 }}>
        <EditDetails
          placeholder={user.user.phone_no}
          editable={false}
          onChangeText={(userNum) => setUserNum(userNum)}
        />
        <EditDetails
          placeholder={user.user.email}
          editable={false}
          onChangeText={(userEmail) => setUserEmail(userEmail)}
        />
        <EditDetails
          placeholder="Address"
          editable={edit}
          onChangeText={(addr) => setAddr(addr)}
        />
        <EditDetails
          placeholder="Hourly Rate"
          editable={edit}
          onChangeText={(rate) => setRate(rate)}
        />

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
          onChangeText={(bio) => setBio(bio)}
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
          onChangeText={(edu) => setEdu(edu)}
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
          onChangeText={(work) => setWork(work)}
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
        <Pressable style={{backgroundColor: 'red'}} >
          <Button
            title="SAVE"
            onPress={() => handleSubButton()}
          />

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
