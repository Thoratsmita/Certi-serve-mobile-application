import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import JobProposalScreen from "../components/screens/JobProposalScreen";
import { jobCard } from "../data";

const JobTopTabNavigation = ({ onPress, onPressPostJob }) => {
  const Top = createMaterialTopTabNavigator();

  return (
    <Top.Navigator
      TabNavigatorConfig={{lazy:false}}
      tabBarOptions={{
        labelStyle: { fontSize: 12, textTransform: "capitalize" },
        // tabStyle: { width: "80%" },
        // style: { paddingHorizontal: 10 },
      }}
    >
      <Top.Screen name="All">
        {() => (
          <JobProposalScreen
            title="All Jobs"
            onEmptyText="Ahh! No Jobs"
            count={2}
            onPress={onPress}
          />
        )}
      </Top.Screen>
      <Top.Screen name="Open">
        {() => (
          <JobProposalScreen
            title="Currently Open Jobs"
            onEmptyText="Ahh! No Open Jobs"
            count={2}
            onPress={onPress}
          />
        )}
      </Top.Screen>
      <Top.Screen name="In Progress">
        {() => (
          <JobProposalScreen
            // title="Currently open jobs"
            onEmptyText="You have not posted any Job"
            // data={jobCard.slice(1, 4)}
            onPressPostJob={onPressPostJob}
          />
        )}
      </Top.Screen>
      <Top.Screen name="Pasts">
        {() => (
          <JobProposalScreen
            title="Past jobs"
            onEmptyText="Ahh! You have not completed any jobs in the past "
            data={jobCard}
          />
        )}
      </Top.Screen>
    </Top.Navigator>
  );
};
export default JobTopTabNavigation;
