import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import JobsScreen from "../screens/JobsScreen";
import ManagementTab from "../components/screens/ManagementTab";

const ManagementNavigation = () => {
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
      <Top.Screen name="Created Milestones" component={ManagementTab} />
      <Top.Screen name="Approved Milestones" component={ManagementTab} />
    </Top.Navigator>
  );
};
export default ManagementNavigation;
