import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SubmitButton from "../SubmitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import YourProposalCard from "../YourProposalCard";
import { useNavigation } from "@react-navigation/native";

export default function YourProposalsScreen({item,user}) {
  const [showData, setShowData] = useState(false);
  const navigation = useNavigation();
  //console.log(user.id)
  return (
    <View style={styles.container}>
      {showData ? (
        <YourProposalCard />
      ) : (
        <View style={{ height: "50%", justifyContent: "space-evenly" }}>
          <Text style={{ textAlign: "center", color: "#a9a9a9", fontSize: 18 }}>
            You have not created any proposal.
          </Text>
          <SubmitButton
            title="Create A Proposal"
            onPress={() => navigation.navigate("PostProposalScreen",{ user:user, item:item})}
            textColor="#fff"
            fontSize={16}
          />
        </View>
      )}
    </View>
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
