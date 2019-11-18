import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import ProfileScreen from "../screens/Profile";

import Header from "../components/Header";


const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const NavStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search tabs title="Home" navigation={navigation} />
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" navigation={navigation} />
        )
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#EEEEEE" //this is the backgroundColor for the app
    },
    transitionConfig
  }
);

const AppStack = createDrawerNavigator({
  Onboarding: {
    screen: OnboardingScreen
  },
  Home: {
    screen: NavStack
  }
});

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
