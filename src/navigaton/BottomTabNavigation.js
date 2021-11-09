import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import JobsScreen from "../screens/JobsScreen";
import InboxScreen from "../screens/InboxScreen";
import Profile_Servee from "../screens/Profile_Servee";
import Profile_Server from "../screens/Profile_Server";
import HomeScreen from "../screens/HomeScreen";
import FinancialDashboard from "../screens/FinancialDashboard";
import JobsStackNavigation from "./JobStackNavigation";
import colors from "../config/colors";

const BottomTabNavigation = ({route}) => {

  const Bottom = createBottomTabNavigator();
  const user = route.params;
  //console.log(user.user.user.name)
  return (
    <Bottom.Navigator tabBarOptions={{ activeTintColor: colors.primary }}>
      <Bottom.Screen
        name="Jobs"
        options={({ route }) => ({
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <MaterialCommunityIcons
                name="briefcase"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="briefcase-outline"
                size={size}
                color={color}
              />
            ),
        })}
      >
        {props => <JobsStackNavigation user={user.user} />}
      </Bottom.Screen>
      <Bottom.Screen
        name="Inbox"
        component={InboxScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <MaterialCommunityIcons name="chat" size={size} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="chat-outline"
                size={size}
                color={color}
              />
            ),
        })}
      />
      <Bottom.Screen
        name="Dashboard"
        component={FinancialDashboard}
        options={({ route }) => ({
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <MaterialCommunityIcons
                name="view-dashboard-variant"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="view-dashboard-variant-outline"
                size={size}
                color={color}
              />
            ),
        })}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile_Server}
        options={({ route }) => ({
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-outline"
                size={size}
                color={color}
              />
            ),
        })}
      />
    </Bottom.Navigator>
  );
};
export default BottomTabNavigation;
