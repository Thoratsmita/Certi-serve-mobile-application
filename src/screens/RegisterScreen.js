import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import SubmitButton from "../components/SubmitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function RegisterScreen({ navigation: { navigate, goBack } }) {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 50, left: 20, zIndex: 5 }}>
        <TouchableOpacity onPress={() => goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={50} color="#609D80" />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image
          source={require("../../assets/appIcon.jpg")}
          style={{ height: "100%", width: "100%", resizeMode: "cover" }}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.form}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={{ width: "100%", padding: 10 }}>
          <Text style={styles.title}>Sign up</Text>
          <AppTextInput icon="account" placeholder="Enter Your Name" />
          <AppTextInput
            icon="wrench-outline"
            placeholder="Enter Your Phone no."
          />
          <AppTextInput icon="email-outline" placeholder="Enter Your Email" />
          <AppTextInput icon="wrench-outline" placeholder="Password" />
          <AppTextInput icon="wrench-outline" placeholder="Confirm Password" />
          <SubmitButton title="Register Me!" onPress={() => navigate("App")} />
          {/* <View style={{ alignSelf: "flex-end" }}> */}
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={{ flexDirection: "row", alignSelf: "center" }}
          >
            <Text
              style={[
                styles.title,
                { fontSize: 15, textTransform: "none", marginRight: 5 },
              ]}
            >
              Already have an Account?
            </Text>
            <Text
              style={[
                styles.title,
                { fontSize: 15, fontWeight: "bold", textTransform: "none" },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          {/* </View> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: "50%",
    width: "100%",
    alignSelf: "center",
    // backgroundColor: "red",
  },
  form: {
    backgroundColor: colors.primary,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    height: "65%",
    width: "100%",
    elevation: 5,
    shadowOpacity: 1,
    position: "absolute",
    bottom: 0,
  },
  title: {
    fontSize: 25,
    color: colors.white,
    marginVertical: 5,
    textTransform: "uppercase",
    alignSelf: "center",
  },
  formFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
