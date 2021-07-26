import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigation from "./src/navigaton/AuthNavigation";
import AllJobsScreen from "./src/screens/AllJobsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import PostJobScreen from "./src/screens/PostJobScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <AuthNavigation />
    //   </NavigationContainer>
    // </View>
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
    // <PostJobScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
