import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import JobProposalScreen from "../components/screens/JobProposalScreen";
import { jobCard } from "../data";
import DetailScreen from "../components/screens/DetailScreen";
import AllProposalScreen from "../components/screens/AllProposalScreen";
import YourProposalsScreen from "../components/screens/YourProposalsScreen";
import ManagementScreen from "../components/screens/ManagementScreen";

const JobDetailNavigation = ({ onPress, item, user }) => {
  const Top = createMaterialTopTabNavigator();
  //console.log(user.user_type)
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
      <Top.Screen name="Details">
        {() => <DetailScreen item={item} />}
      </Top.Screen>
      <Top.Screen name="All Proposals">
        {() => <AllProposalScreen item={item} user={user} />}
      </Top.Screen>
      {user.user_type == "Server" ? (
        <Top.Screen name="Your Proposals">
          {(props) => (
            <YourProposalsScreen {...props} item={item} user={user} />
          )}
        </Top.Screen>
      ) : null}
      {user.user_type == "Servee" ? (
        <Top.Screen name="Management" component={ManagementScreen} />
      ) : null}
    </Top.Navigator>
  );
};
export default JobDetailNavigation;
