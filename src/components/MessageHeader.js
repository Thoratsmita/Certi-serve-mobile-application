import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import JobsTopTabNavigation from "../navigaton/JobsTopTabNavigation";
import CircleAvatar from "../components/CircleAvatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
export default function MessageHeader({
  onBack,
  desig,
  name,
  radius = 28,
}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color={colors.primary}
        />
      </TouchableOpacity>
      <View style={{bottom:7,left:2}}>
        <CircleAvatar
          icon={require("../../assets/appIcon.jpg")}
          radius={radius}
          borderColor={colors.primary}
          inline
          outline
        />
      </View>
      <View style={{bottom:5}}>
        <Text style={{fontSize: 20}}>{name}</Text>
        <Text style={{fontSize: 13, color: 'gray'}}>{desig}</Text>
      </View>
      <SimpleLineIcons name="options-vertical" size={22} style={{color:"green",left:80,top:9}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "red",
    // height: "25%",
    padding: 20,
    paddingBottom: 10,
    marginTop: Platform.OS === "android" ? 30 : 0,
    minHeight: 50,
    flexDirection: "row",
    borderBottomWidth:1,


    // maxHeight: 186 / 4,
  },
  text: {
    color: "#909090",
    // textAlign: "center",
  },

});
