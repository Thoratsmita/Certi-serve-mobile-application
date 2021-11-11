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
} from "react-native";
import SubmitButton from "../SubmitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import YourProposalCard from "../YourProposalCard";
import ProposalCard from "../ProposalCard";
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
  const isFocused = useIsFocused();
  //console.log(user.id)

  useEffect(() => {
    propFetcher();
  }, [isFocused]);

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

  return (
    <View style={styles.container}>
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
});
