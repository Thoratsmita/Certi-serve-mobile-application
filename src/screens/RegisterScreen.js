import React, { useEffect, useRef, useState } from "react";
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
import ConfirmGoogleCaptcha from "react-native-google-recaptcha-v2";
import colors from "../config/colors";

export default function RegisterScreen({
  navigation: { navigate, goBack },
  route,
}) {
  const { usertype, otherParam } = route.params;
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNum, setUserNum] = useState("");
  const [userPass, setUserPass] = useState("");
  const [conuserPass, setconUserPass] = useState("");
  const [userType, setUserType] = useState(usertype);
  const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const baseUrl =
    "https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  onMessage = (event) => {
    if (event && event.nativeEvent.data) {
      if (["cancel", "error", "expired"].includes(event.nativeEvent.data)) {
        this.captchaForm.hide();
        return;
      } else {
        console.log("Verified code from Google", event.nativeEvent.data);
        setTimeout(() => {
          this.captchaForm.hide();
          handleRegisterButton();
        }, 1500);
      }
    }
  };

  const handleRegisterButton = () => {
    if (!userName) {
      alert("Please Enter Name!");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userNum) {
      alert("Please fill Phone Number");
      return;
    }
    if (!userPass) {
      alert("Please fill Password");
      return;
    }

    if (userPass != conuserPass) {
      alert("Passwords Do Not Match");
      return;
    }

    var dataToSend = {
      username: userName,
      name: userName,
      email: userEmail,
      phone_no: userNum,
      password: userPass,
      user_type: userType,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://radiant-bastion-14577.herokuapp.com/api/userscreate", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        if (responseJson.msg === "User created successfully") {
          alert("Registration Successful!");
          navigate("Login");
        }else{
          alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          <AppTextInput
            icon="account"
            placeholder="Enter Your Name"
            onChangeText={(userName) => setUserName(userName)}
          />
          <AppTextInput
            icon="wrench-outline"
            placeholder="Enter Your Phone no."
            onChangeText={(userNum) => setUserNum(userNum)}
          />
          <AppTextInput
            icon="email-outline"
            placeholder="Enter Your Email"
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          />
          <AppTextInput
            icon="wrench-outline"
            placeholder="Password"
            onChangeText={(userPass) => setUserPass(userPass)}
          />
          <AppTextInput
            icon="wrench-outline"
            placeholder="Confirm Password"
            onChangeText={(conuserPass) => setconUserPass(conuserPass)}
          />
          <ConfirmGoogleCaptcha
            ref={(_ref) => (captchaForm = _ref)}
            siteKey={siteKey}
            baseUrl={baseUrl}
            languageCode="en"
            onMessage={onMessage}
          />
          <SubmitButton
            title="Register Me!"
            onPress={() => captchaForm.show()}
          />
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
