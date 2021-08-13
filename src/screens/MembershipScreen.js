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

export default function MembershipScreen({navigation:{ navigate, goback }}) {

  const cardData = [
    {
      title: "Basic",
      sub: "Free" ,
      navTo: () => navigate("App"), 
    },
    {
      title: "Premium",
      icon: require("../../assets/subscription.png"),
      navTo: () => navigate("Plans"),
    },
  ];
  

  const Card = ({ title,key,onPress,icon,sub}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        key={key}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.subs}>{sub}</Text>
        <Image
          style={{ width: "85%", height: "85%", resizeMode: "contain" }}
          source={icon}
        />
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      
      <Header topic=" "/>

      <Text style={styles.title}>Membership</Text>
    
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
    justifyContent: "space-around",
    elevation: 5,
    shadowOpacity: 1,
    position: "absolute",
    bottom: 0,
  },

  body: {
    backgroundColor: "yellow",
    flex: 2,
  },

  title: {
    fontSize: 33,
    color: "gray",
    marginVertical: 5,   
    position: "absolute",
    left: 85,
    top: 300,
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
    position: "absolute",
    left: 185,
    top: 28,

    
  },

  card: {
    backgroundColor: "#f4f4f4",
    width: "80%",
    height: 100,
    padding: 25,
    borderRadius: 15,
    margin: 10,
    //justifyContent: "space-around",
    elevation: 5,
    paddingLeft: 30,
    flexDirection:'row', 
    // backgroundColor: "red",
  },

});