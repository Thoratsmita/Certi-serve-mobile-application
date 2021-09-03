import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WalletScreen from "../components/screens/WalletScreen";
import TransScreen from "../components/screens/TransScreen";
import SavedTransScreen from "../components/screens/SavedTransScreen";
import BankDepositScreen from "../components/screens/BankDepositScreen";

import { jobCard } from "../data";
import colors from "../config/colors";

const FinanceDashTopTabNavigation = ({ onPress }) => {
  const Top = createMaterialTopTabNavigator();

  return (
    <Top.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12, top: 10 },
        tabStyle: { borderRadius: 10, height: 80 },
        style: { width: "100%", overflow: "hidden" },
        activeTintColor: "green",
        inactiveTintColor: "black",
        flex: 1,
        indicatorStyle: { backgroundColor: "white" },
      }}
    >
      <Top.Screen name="Wallet">{() => <WalletScreen />}</Top.Screen>
      <Top.Screen name="Transactions">{() => <TransScreen />}</Top.Screen>
      <Top.Screen name="Saved">{() => <SavedTransScreen />}</Top.Screen>
    </Top.Navigator>
  );
};
export default FinanceDashTopTabNavigation;
