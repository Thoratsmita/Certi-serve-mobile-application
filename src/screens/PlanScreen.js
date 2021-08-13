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
import { Feather } from "@expo/vector-icons";
import ImageIcon from "../components/ImageIcon";
import Header from "../components/Header";


export default function PlanScreen({navigation:{ navigate, goback }}) {

  const cardData = [
    {
      title: "19908/- Annually",
      sub: "Description - lorem ipsum lorem ispum" ,  
    },
    {
      title: "2000/- Monthly",
      sub: "Description - lorem ipsum lorem ispum" , 
      
    },
  ];
  

  const Card = ({ title,key,icon,sub }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate("Payment")}
        key={key}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.subs}>{sub}</Text>
        
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      
      <Header topic=" "/>
      <Feather name="calendar" size={60} color={colors.secondary} style={{ position: "absolute", top: 200, left: 160}}/>
      <Text style={styles.title}>Choose Plan</Text>
    
      <View style={styles.form}>
        {cardData.map((e, i) => {
          return Card({
            title: e.title,
            key: i,
            onPress: e.navi,
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
    height: "55%",
    width: "100%",
    justifyContent: "space-around",
    elevation: 5,
    shadowOpacity: 1,
    position: "absolute",
    bottom: 0,
  },

  

  title: {
    fontSize: 30,
    color: "gray",
    marginVertical: 5,   
    position: "absolute",
    left: 100,
    top: 270,
  },

  card: {
    backgroundColor: "#f4f4f4",
    width: "80%",
    height: 150,
    padding: 25,
    borderRadius: 15,
    margin: 10,
    // justifyContent: "space-around",
    elevation: 5,
    paddingLeft: 25,
    alignItems: "center",
    // backgroundColor: "red",
  },
  cardTitle: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "800",
    
    
  },
  subs: {
    fontSize: 15,
    color: "gray",
    fontWeight: "800",
    top:28
     
  },
  cardHeader: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  

});