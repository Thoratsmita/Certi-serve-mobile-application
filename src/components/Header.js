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

export default function Header({
  onBack,
  topic = "Freelance Graphic Designer",
  postJob,
}) {
  return (
    <View
      // onLayout={(e) => console.log(e.nativeEvent.layout, "=======")}
      style={[styles.header, { paddingTop: onBack ? 50 : 20 }]}
    >
      {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.back}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <View>
          <CircleAvatar
            icon={require("../../assets/appIcon.jpg")}
            radius={48}
            title="David Ray"
            subtitle="@davidray"
            borderColor={colors.primary}
            inline
            outline
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity>
            <AntDesign name="search1" size={50} color="#609D80" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: 5,
        }}
      >
        {!postJob && topic && (
          <Text style={[styles.text, { fontSize: 20 }]}>{topic}</Text>
        )}

        {/* <AntDesign name="dots-vertical" color="#a9a9a9" size={25} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "red",
    // height: "25%",
    justifyContent: "space-between",
    padding: 20,
    paddingBottom: 10,
    marginTop: Platform.OS === "android" ? 25 : 0,
    minHeight: 185,

    // maxHeight: 186 / 4,
  },
  text: {
    color: "#909090",
    // textAlign: "center",
  },
  back: {
    position: "absolute",
    left: 10,
    top: 10,
  },
});
