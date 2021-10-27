import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import JobProposalScreen from "../components/screens/JobProposalScreen";
import { jobCard } from "../data";
import DetailScreen from "../components/screens/DetailScreen";
import AllProposalScreen from "../components/screens/AllProposalScreen";
import YourProposalsScreen from "../components/screens/YourProposalsScreen";
import ManagementScreen from "../components/screens/ManagementScreen";

const JobDetailNavigation = ({ onPress,item }) => {
  const Top = createMaterialTopTabNavigator();
  return (
    <Top.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          // letterSpacing: -0.2,
          textTransform: "capitalize",
          // backgroundColor: "red",
          margin: 0,
        },
        tabStyle: { padding: 0 },
        // style: { paddingHorizontal: 10 },
      }}
    >
      <Top.Screen name="Details">{() => <DetailScreen item={item}/>}</Top.Screen>
      <Top.Screen name="All Proposals" component={AllProposalScreen} />
      <Top.Screen name="Your Proposals" component={YourProposalsScreen} />
      <Top.Screen name="Management" component={ManagementScreen} />
    </Top.Navigator>
  );
};
export default JobDetailNavigation;
