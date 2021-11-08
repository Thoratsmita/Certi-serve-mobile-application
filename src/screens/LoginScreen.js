import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import SubmitButton from "../components/SubmitButton";
import { Entypo as Icon } from "@expo/vector-icons";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ConfirmGoogleCaptcha from "react-native-google-recaptcha-v2";

export default function LoginScreen({
  navigation: { navigate, goBack },
  route,
}) {
  const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const baseUrl =
    "https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const [checked, setChecked] = useState(false);
  const { userType, otherParam } = route.params;
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  onMessage = (event) => {
    if (event && event.nativeEvent.data) {
      if (["cancel", "error", "expired"].includes(event.nativeEvent.data)) {
        this.captchaForm.hide();
        return;
      } else {
        console.log("Verified code from Google", event.nativeEvent.data);
        setTimeout(() => {
          this.captchaForm.hide();
          handleLoginButton();
        }, 1500);
      }
    }
  };

  const handleLoginButton = () => {
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }

    if (!userPass) {
      alert("Please fill Password");
      return;
    }

    var dataToSend = {
      email: userEmail,
      password: userPass,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://radiant-bastion-14577.herokuapp.com/api/login", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.access_token) {
          alert("Logged In!");
          if (responseJson.user.user_type === "Server") {
            navigate("Membership",{ user: responseJson.user });
          } else {
            navigate("App",{ user: responseJson.user });
          }
        } else {
          alert("Wrong Email Or Password!");
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const circleAvatar = ({ icon, color }) => {
    return (
      <View style={{ margin: 5 }}>
        <Icon name={icon} color={color} size={40} />
      </View>
    );
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
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <AppTextInput
          icon="home"
          placeholder="Enter Your Email"
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
        />
        <AppTextInput
          icon="wrench"
          placeholder="Password"
          secure={true}
          onChangeText={(userPass) => setUserPass(userPass)}
        />
        <View style={styles.formFooter}>
          <TouchableOpacity
            onPress={() => setChecked(!checked)}
            style={styles.checkBoxContainer}
          >
            <View style={styles.checkBox}>
              {checked && <Icon name="check" />}
            </View>
            <Text style={{ color: "#fff" }}>Remember me</Text>
          </TouchableOpacity>
          <Text style={{ color: "#fff" }}>Forgot Password?</Text>
        </View>

        <ConfirmGoogleCaptcha
          ref={(_ref) => (this.captchaForm = _ref)}
          siteKey={siteKey}
          baseUrl={baseUrl}
          languageCode="en"
          onMessage={this.onMessage}
        />

        <SubmitButton title="Login" onPress={() => this.captchaForm.show()} />
        <Text style={[styles.title, { fontSize: 15 }]}>--Or--</Text>
        <Text
          style={[styles.title, { textTransform: "capitalize", fontSize: 20 }]}
        >
          Login With
        </Text>
        <View style={styles.loginOptions}>
          {circleAvatar({ icon: "google--with-circle", color: "red" })}
          {circleAvatar({ icon: "facebook-with-circle", color: "blue" })}
        </View>
        <TouchableOpacity
          onPress={() => navigate("Register", { usertype: userType })}
          style={{ flexDirection: "row" }}
        >
          <Text
            style={[
              styles.title,
              { fontSize: 15, textTransform: "none", marginRight: 5 },
            ]}
          >
            Don't have an account?
          </Text>
          <Text
            style={[
              styles.title,
              { fontSize: 15, fontWeight: "bold", textTransform: "none" },
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
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
    height: "60%",
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
  },
  formFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  checkBoxContainer: { flexDirection: "row" },
  checkBox: {
    width: 13,
    height: 13,
    backgroundColor: colors.white,
    alignSelf: "center",
    marginRight: 5,
  },
  loginOptions: {
    flexDirection: "row",
  },
  recaptha: {
    height: 100,
    backgroundColor: "red",
  },
});
