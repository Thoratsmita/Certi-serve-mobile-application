import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import SubmitButton from "../SubmitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import YourProposalCard from "../YourProposalCard";
import { useNavigation } from "@react-navigation/native";
import BoxInput from "../BoxInput";

export default function PostProposalScreen({ route }) {
  const {user, item} = route.params;
  const navigation = useNavigation();
  const [days, setDays] = useState("");
  const [bidAmt, setBidAmt] = useState("");
  const [desc, setDesc] = useState("");
  //console.log(user.id);



  const handleSubmitButton = () => {
    if (!bidAmt) {
      alert("Please fill Bid Amount");
      return;
    }

    if (!days) {
      alert("Please fill Delivery Target");
      return;
    }

    if (!desc) {
      alert("Please fill Description");
      return;
    }

    var dataToSend = {
      job_id: item.id,
      user_id: user.id,
      bid_amount: bidAmt,
      name: user.name,
      days_delivered: days,
      rating: "3",
      description: desc,
      status: "active",
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://radiant-bastion-14577.herokuapp.com/api/proposal/create", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        navigation.goBack();
      })

      .catch((error) => {
        console.error(error);
      });
  };




  return (
    <ScrollView style={{ backgroundColor: "#f7f7f7",top:StatusBar.currentHeight}}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color={colors.primary}
        />
      </TouchableOpacity>
      <View style={[styles.modalContainer, { flex: 1,height: 900 }]}>
        <Text style={styles.heading}>Place A Bid on this project</Text>
        <BoxInput
          blurText="Bid Amount"
          placeholder="₦"
          flexDirection="row"
          onChangeText={bidAmt => setBidAmt(bidAmt)}

        />
        <BoxInput
          blurText="This project will be delivered in"
          placeholder="Days"
          flexDirection="row-reverse"
          onChangeText={days => setDays(days)}

        />
        <Text style={styles.heading}>Describe your proposal</Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder="What makes you the best candidate for this project?"
          onChangeText={desc => setDesc(desc)}

          style={styles.detailnput}
        />
        <SubmitButton
          title="Create Proposal"
          textColor="#fff"
          fontSize={16}
          backgroundColor={colors.primary}
          onPress={() => {
            handleSubmitButton();
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  modalContainer: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    backgroundColor: "#f7f7f7",
  },
  icon: {
    paddingVertical: 5,
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 10,
  },
  heading: {
    color: colors.primary,
    fontSize: 18,
  },
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
  blurText: {
    fontSize: 16,
    color: "#a9a9a9",
  },
  detailnput: {
    textAlignVertical: "top",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 18,
  },
  block: {
    flexDirection: "row",
    // backgroundColor: "red",
  },
});
