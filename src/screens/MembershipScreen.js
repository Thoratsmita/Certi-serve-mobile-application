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

import ImageIcon from "../components/ImageIcon";
import CircleAvatar from "../components/CircleAvatar";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MembershipScreen({ navigation: { navigate, goback, },route}) {
  const user = route.params;
  const cardData = [
    {
      title: "Basic",
      sub: "Free",
      navTo: () => navigate("App",{ user: user.user }),
    },
    {
      title: "Premium",
      icon: require("../../assets/subscription.png"),
      navTo: () => navigate("Plans"),
    },
  ];

  const Card = ({ title, key, onPress, icon, sub }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        key={key}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>{title}</Text>
        {sub && <Text style={styles.subs}>{sub}</Text>}
        {icon && (
          <Image
            style={{
              width: "85%",
              height: "85%",
              resizeMode: "contain",
            }}
            source={icon}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header topic=" " name="David Ray" userName="@davidray" icon="" />
        <Text style={styles.title}>Membership</Text>
      </View>

      <View style={styles.form}>
        {cardData.map((e, i) => {
          return Card({
            title: e.title,
            key: i,
            onPress: e.navTo,
            icon: e.icon,
            sub: e.sub,
          });
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    height: "45%",
    width: "100%",
    elevation: 5,
    shadowOpacity: 1,
    bottom: 0,
    flex: 1,
  },

  body: {
    backgroundColor: "yellow",
    flex: 2,
  },

  title: {
    fontSize: 33,
    color: "gray",
    marginVertical: 5,
    alignSelf: "center",
  },

  cardTitle: {
    fontSize: 24,
    color: "gray",
    fontWeight: "800",
  },

  subs: {
    fontSize: 23,
    color: colors.primary,
    fontWeight: "800",
  },

  card: {
    backgroundColor: "#f4f4f4",
    width: "80%",
    height: 100,
    padding: 25,
    borderRadius: 15,
    margin: 10,
    elevation: 5,
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
