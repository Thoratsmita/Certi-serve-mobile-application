import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WalletScreen from "../components/screens/WalletScreen";
import MessageScreen from "../components/screens/MessageScreen";
import SavedTransScreen from "../components/screens/SavedTransScreen";
import BankDepositScreen from "../components/screens/BankDepositScreen";

import { jobCard } from "../data";
import colors from "../config/colors";

const MessageTopTabNavigation = ({ onPress }) => {
  const Top = createMaterialTopTabNavigator();

  return (
    <Top.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14, top: 12,fontWeight:'bold'},
        tabStyle: { borderRadius: 10, height: 70 },
        style: { width: "100%", overflow: "hidden" },
        activeTintColor: "green",
        inactiveTintColor: "black",
        flex: 1,
        indicatorStyle: { backgroundColor: "white" },
      }}
    >
      <Top.Screen name="Messages">{() => <MessageScreen />}</Top.Screen>
      <Top.Screen name="Support">{() => <MessageScreen />}</Top.Screen>
    </Top.Navigator>
  );
};
export default MessageTopTabNavigation;
