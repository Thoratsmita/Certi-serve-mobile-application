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

export default function YourProposalsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showData, setShowData] = useState(false);
  const BoxInput = ({
    defaultValue,
    flexDirection = "row",
    placeholder,
    blurText,
  }) => (
    <View style={styles.box}>
      {blurText && <Text style={styles.blurText}>{blurText}</Text>}
      <View
        style={[styles.costInputContainer, { flexDirection: flexDirection }]}
      >
        <View style={styles.cost}>
          <Text style={{ fontSize: 18 }}>​​{placeholder}</Text>
        </View>
        <TextInput defaultValue={defaultValue} style={[styles.costInput]} />
      </View>
    </View>
  );
  const MilestoneBlock = ({ defaultValueCost, milestoneCount }) => (
    <View style={styles.block}>
      <TextInput
        multiline
        numberOfLines={2}
        defaultValue={"Milestone " + milestoneCount}
        style={[styles.detailnput, { flex: 1, marginRight: 10 }]}
      />
      <BoxInput
        defaultValue={defaultValueCost}
        placeholder="​​₦"
        flexDirection="row"
      />
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
          <Text style={styles.heading}>Place A Bid on this project</Text>
          <BoxInput
            defaultValue="140"
            blurText="Bid Amount"
            placeholder="​​₦"
            flexDirection="row"
          />
          <BoxInput
            defaultValue="12"
            blurText="This project will be delivered in"
            placeholder="​​Days"
            flexDirection="row-reverse"
          />
          <Text style={styles.heading}>Describe your proposal</Text>
          <TextInput
            multiline
            numberOfLines={10}
            placeholder="What makes you the best candidate for this
          project?"
            style={styles.detailnput}
          />
          <Text style={styles.heading}>Suggest a milestone payment</Text>
          <MilestoneBlock defaultValueCost="140" milestoneCount="1" />
          <MilestoneBlock defaultValueCost="80" milestoneCount="2" />
          <Text style={styles.blurText}>Add another milestone</Text>
          <SubmitButton
            title="Create Proposal"
            textColor="#fff"
            fontSize={16}
            backgroundColor={colors.primary}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </ScrollView>
    </Modal>
  );
  return (
    <View style={styles.container}>
      <ModalView />
      {showData ? (
        <YourProposalCard />
      ) : (
        <View style={{ height: "50%", justifyContent: "space-evenly" }}>
          <Text style={{ textAlign: "center", color: "#a9a9a9", fontSize: 18 }}>
            You have not created any proposal.
          </Text>
          <SubmitButton
            title="Create A Proposal"
            onPress={() => {
              setModalVisible(!modalVisible);
              setShowData(true);
            }}
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
