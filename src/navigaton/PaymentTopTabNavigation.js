import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CreditCardScreen from "../components/screens/CreditCardScreen";
import BankDepositScreen from "../components/screens/BankDepositScreen";

import { jobCard } from "../data";
import colors from "../config/colors";

const PaymentTopTabNavigation = ({ onPress}) => {
  const Top = createMaterialTopTabNavigator();

  return (
    <Top.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12,},
        tabStyle: { borderRadius: 10},
        style: {width: '90%', left:20,borderRadius: 10},
        activeTintColor:"white",
        inactiveTintColor:"black",
        flex:1,
        indicatorStyle : {height:50,backgroundColor:colors.primary},
        

      }}
    >
      <Top.Screen name="Credit Card">
        {() => (
          <CreditCardScreen/>
        )}
      </Top.Screen>
      <Top.Screen name="Bank Deposit">
        {() => (
          <BankDepositScreen/>
        )}
      </Top.Screen>
      
    </Top.Navigator>
  );
};
export default PaymentTopTabNavigation;
