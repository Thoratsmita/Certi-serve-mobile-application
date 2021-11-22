import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import SubmitButton from "../SubmitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import YourProposalCard from "../YourProposalCard";
import ProposalCard from "../ProposalCard";
import AppTextInput from "../AppTextInput";
import BoxInput from "../BoxInput";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { SimpleLineIcons as Icon } from "@expo/vector-icons";

export default function YourProposalsScreen({ item, user }) {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [mnameA, setmnameA] = useState("");
  const [mnameB, setmnameB] = useState("");
  const isFocused = useIsFocused();
  const [modalData, setModalData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  //console.log(item);
  useEffect(() => {
    propFetcher();
  }, [isFocused]);

  const handleSubmitButton = () => {
    if (!mnameA) {
      alert("Please fill Amount");
      return;
    }

    if (!mnameB) {
      alert("Please fill Amount");
      return;
    }

    var dataToSend = {
      job_id: item.job_id,
      user_id: item.user_id,
      proposal_id: item.id,
      milestone_details: [
        {
          milestone_name: "Milestone - 1",
          milestone_amount: mnameA,
        },
        {
          milestone_name: "Milestone - 2",
          milestone_amount: mnameA,
        },
      ],
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
        setModalVisible(false);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const propFetcher = () => {
    fetch(
      "http://radiant-bastion-14577.herokuapp.com/api/proposals/" + item.id,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        if (!responseJson.error) {
          setData(responseJson.proposals);
        } else {
          setData(responseJson);
          setShow(true);
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };
  const MilestoneBlock = ({ milestoneCount, onChangeText }) => (
    <View style={styles.block}>
      <TextInput
        multiline
        editable={false}
        numberOfLines={2}
        defaultValue={"Milestone " + milestoneCount}
        style={[styles.detailnput, { flex: 1, marginRight: 10 }]}

      />
      <BoxInput placeholder="​​₦" flexDirection="row" onChangeText = {onChangeText} />
    </View>
  );
  const ModalView = () => (
    <Modal animationType="slide" visible={modalVisible}>
      <ScrollView style={{ backgroundColor: "#f7f7f7" }}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={colors.primary}
          />
        </TouchableOpacity>
        <View style={[styles.modalContainer, { flex: 1 }]}>
          <Text
            style={{
              fontSize: 20,
              color: "green",
              fontWeight: "bold",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Edit Proposal
          </Text>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Add Milestones</Text>
          </View>
          <MilestoneBlock milestoneCount="1" onChangeText = {(mnameA) => setmnameA(mnameA)} />
          <MilestoneBlock milestoneCount="2" onChangeText = {(mnameA) => setmnameB(mnameB)}/>
          <Text style={styles.blurText}>Add another milestone</Text>
          <SubmitButton
            title="Create Milestone"
            textColor="#fff"
            fontSize={16}
            backgroundColor={colors.primary}
            onPress={() => handleSubmitButton()}
          />
        </View>
      </ScrollView>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <ModalView />
      {!show ? (
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) =>
              item.user_id === user.id ? (
                <ProposalCard
                  title={item.name}
                  rating={item.rating}
                  //review={item.review}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setModalData(item);
                    console.log(item);
                  }}
                  amount={item.bid_amount}
                  days={item.days_delivered}
                />
              ) : (
                <View style={{ height: "50%", justifyContent: "space-evenly" }}>
                  <Pressable onPress={() => setShow(false)}>
                    <Icon name="refresh" size={30} color="#a9a9a9" />
                  </Pressable>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#a9a9a9",
                      fontSize: 18,
                    }}
                  >
                    You have not created any proposal.
                  </Text>
                  <SubmitButton
                    title="Create A Proposal"
                    onPress={() =>
                      navigation.navigate("PostProposalScreen", {
                        user: user,
                        item: item,
                      })
                    }
                    textColor="#fff"
                    fontSize={16}
                  />
                </View>
              )
            }
          />
        </View>
      ) : (
        <View style={{ height: "50%", justifyContent: "space-evenly" }}>
          <Pressable onPress={() => setShow(false)}>
            <Icon name="refresh" size={30} color="#a9a9a9" />
          </Pressable>
          <Text style={{ textAlign: "center", color: "#a9a9a9", fontSize: 18 }}>
            You have not created any proposal.
          </Text>
          <SubmitButton
            title="Create A Proposal"
            onPress={() =>
              navigation.navigate("PostProposalScreen", {
                user: user,
                item: item,
              })
            }
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
  cell: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: "10",
  },
  cellContainer: {
    padding: 10,
  },
  cellText: {
    fontSize: 20,
    color: "#a9a9a9",
    fontWeight: "bold",
  },
});
