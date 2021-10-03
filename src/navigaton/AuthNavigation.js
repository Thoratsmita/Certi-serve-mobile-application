import "react-native-gesture-handler";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import AllJobsScreen from "../screens/AllJobsScreen";
import HomeScreen from "../screens/HomeScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import MembershipScreen from "../screens/MembershipScreen";
import PlanScreen from "../screens/PlanScreen";
import PaymentScreen from "../screens/PaymentScreen";
import InterMessageScreen from "../screens/InterMessageScreen";



const AuthNavigation = () => {
  const Stack = createStackNavigator();
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
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Membership" component={MembershipScreen} />
      <Stack.Screen name="Plans" component={PlanScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="InterMessageScreen" component={InterMessageScreen} />

     
      {/* <Stack.Screen name="Jobs" component={AllJobsScreen} /> */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="App" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
