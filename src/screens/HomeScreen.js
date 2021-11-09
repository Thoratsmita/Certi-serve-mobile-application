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
import Header from "../components/Header";

export default function HomeScreen({ navigation: { navigate },user}) {
  
  console.log(user.name)
  return (
    <View style={styles.container}>
      <Header name={user.name} userName={user.username} />
      <JobsTopTabNavigation
        user={user.user}
        onPress={() => navigate("JobDetail")}
        onPressPostJob={() => navigate("PostJob")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
