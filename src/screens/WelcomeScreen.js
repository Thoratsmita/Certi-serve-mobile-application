import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import ImageIcon from "../components/ImageIcon";

export default function WelcomeScreen({ navigation: { navigate } }) {
  const cardData = [
    {
      title: "Server",
      subTitle: "I'm looking to post jobs and\nhire candidates",
      navi: () => navigate("Login", {userType: "Server"}),
    },
    {
      title: "Servee",
      subTitle: "I'm willing to set up career\n& get hired by companies.",
      navi: () => navigate("Login", {userType: "Servee"}),
    },
  ];

  const Card = ({ title, subTitle, key, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        key={key}
        style={styles.card}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{title}</Text>
          <ImageIcon
            height={30}
            width={60}
            image={require("../../assets/arrow-right.png")}
          />
          {/* // <Image */}
          {/* //   source={require("../../assets/arrow-right.png")}
          //   style={styles.arrow}
          // /> */}
        </View>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Preference!</Text>
      {cardData.map((e, i) => {
        return Card({
          title: e.title,
          subTitle: e.subTitle,
          key: i,
          onPress: e.navi,
        });
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: colors.white,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f4f4f4",
    width: "80%",
    height: 150,
    padding: 15,
    borderRadius: 15,
    margin: 10,
    // justifyContent: "space-around",
    elevation: 5,
    paddingLeft: 25,
    // backgroundColor: "red",
  },
  cardTitle: {
    fontSize: 35,
    color: "#000",
    fontWeight: "800",
    borderBottomWidth: 0.5,
    borderBottomColor: "#B5B5B5",
  },
  subTitle: {
    lineHeight: 20,
    fontSize: 16,
    color: "#454545",
    marginTop: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrow: {
    height: 30,
    width: 60,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
