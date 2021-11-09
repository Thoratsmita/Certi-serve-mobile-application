import "react-native-gesture-handler";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import JobDetailNavigation from "./JobDetailNavigation";
import JobDetailScreen from "../screens/JobDetailScreen";
import PostJobScreen from "../screens/PostJobScreen";

const JobsStackNavigation = ({user}) => {
  const Stack = createStackNavigator();
  //console.log({user})
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // transitionSpec: {
        //   open: config,
        //   close: config,
        // }
      }}
      headerMode={false}
      //   initialRouteName="App"
    >
      <Stack.Screen name="Home">{(props) => <HomeScreen {...props} user={user.user}/>}</Stack.Screen>
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
      <Stack.Screen name="PostJob" component={PostJobScreen} />
    </Stack.Navigator>
  );
};
export default JobsStackNavigation;
