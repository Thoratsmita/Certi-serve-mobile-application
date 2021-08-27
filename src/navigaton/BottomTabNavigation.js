import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import JobsScreen from "../screens/JobsScreen";
import Profile_Servee from "../screens/Profile_Servee";
import HomeScreen from "../screens/HomeScreen";
import JobsStackNavigation from "./JobStackNavigation";
import colors from "../config/colors";

const BottomTabNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator tabBarOptions={{ activeTintColor: colors.primary }}>
      <Bottom.Screen
        name="Jobs"
        component={JobsStackNavigation}
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
      />
      <Bottom.Screen
        name="Inbox"
        component={JobsScreen}
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
        component={JobsScreen}
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
        component={Profile_Servee}
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
