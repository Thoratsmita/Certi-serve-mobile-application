import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import JobProposalScreen from "../components/screens/JobProposalScreen";
import { jobCard } from "../data";

const JobTopTabNavigation = ({ onPress, onPressPostJob,user }) => {
  const Top = createMaterialTopTabNavigator();
  const showTab = user.user.user_type === "Servee" ? true : false;
  console.log(user.user.user_type)
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
            user={user}
          />
        )}
      </Top.Screen>
      <Top.Screen name={user.user.user_type === "Servee" ? "Open" : "In Progress"}>
        {() => (
          <JobProposalScreen
            title="Currently Open Jobs"
            onEmptyText="Ahh! No Open Jobs"
            count={2}
            onPress={onPress}
            user={user}
          />
        )}
      </Top.Screen>
      {showTab ? (
        <Top.Screen name="Post Job">
          {() => (
            <JobProposalScreen
              //title="Currently open jobs"
              onEmptyText="Post Jobs Now"
              // data={jobCard.slice(1, 4)}
              count={0}
              onPressPostJob={onPressPostJob}
              user={user}
            />
          )}
        </Top.Screen>
      ) : null }
      <Top.Screen name="Pasts">
        {() => (
          <JobProposalScreen
            title="Past jobs"
            onEmptyText="Ahh! You have not completed any jobs in the past "
            user={user}
          />
        )}
      </Top.Screen>
    </Top.Navigator>
  );
};
export default JobTopTabNavigation;
