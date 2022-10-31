import React from "react";

import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import InicioScreen from '@routes/app/InicioScreen';


//Screen searchs
import SiniestroScreenSearch from '@routes/app/InicioScreen/SiniestroScreenSearch';
import SiniestroScreen from '@routes/app/InicioScreen/Siniestros';


import LoginScreen from '@routes/auth/LoginScreen';

import AuthLoadingScreen from '@routes/auth/AuthLoadingScreen';


import { Image, TouchableOpacity, Text } from "react-native";
import DrawerMenu from './DrawerMenu';
import { Colors } from "react-native-paper";
//import Constants from 'expo-constants';

import { h, w, totalSize } from '@utils/Dimensiones';
import LinearGradient from "react-native-linear-gradient";
import { colors } from '@styles';


const companyLogo = require('@assets/images/companylogo-noleyenda.png');
const backImage = require('@assets/icons/ic_arrow-backmdpi.png');
const menuImage = require('@assets/icons/ic_menumdpi.png');

let navigationItems = {
  state: {
    routeName: ""
  }
};

const renderBackIcon = () => {
  return (
    <Image
      source={backImage}
      style={{ height: h(2), marginLeft: -30 }}
      resizeMode="contain"
    />
  )
}

const logoIcon = (props) => {
  return (

    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
      {
        props.navigation.state.routeName != "Inicio"
          ? props.navigation.state.routeName
          : "SINIESTROS NAVAPPS"
      }
    </Text>

  );
}

const menuIcon = (navigation) => {
  navigationItems = navigation;
  return (
    <TouchableOpacity
      style={{ padding: totalSize(0.9), margin: totalSize(0.9) }}
      onPress={() => navigation.toggleDrawer()}>
      <Image
        style={{ height: h(2.5) }}
        source={menuImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const NAVIGATION_OPTIONS = {
  headerBackImage: renderBackIcon(),
  //headerTitle: logoIcon(),
  gestureEnabled: false,
  screenOptions: { gestureEnabled: false },
  headerBackTitle: null,
  headerTitleContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    alignContent: 'center',
    position: "absolute",
    left: 0,
    right: 0,
  },
  headerStyle: {
    paddingTop: 0,
    marginHorizontal: totalSize(0),
    borderRadius: totalSize(0.8),
    elevation: 6
  }
}

const UserNavigator = createStackNavigator(
  {
    Inicio: {
      screen: InicioScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: menuIcon(navigation),
          gestureEnabled: false,
          screenOptions: { gestureEnabled: false },
        }
      }
    },
    SiniestroSearch: {
      screen: SiniestroScreenSearch,
      navigationOptions: {
        headerTitle: 'Siniestros',
      },
    },
    Siniestros: {
      screen: SiniestroScreen,
      navigationOptions: {
        headerTitle: 'Crear Siniestro',
      },
    }
  },
  {
    initialRouteName: "Inicio",
    defaultNavigationOptions: props => {
      return {
        ...NAVIGATION_OPTIONS,
        headerTitle: logoIcon(props),
        gesturesEnabled: true,
        swipeEnabled: true,
        headerBackground: (
          <LinearGradient
            colors={colors.linearGradient}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        ),
        headerTitleStyle: { color: '#000' }
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Inicio: {
      screen: UserNavigator,
      // navigationOptions: {
      //   headerTitle: 'Inicio'
      // }
    }
  },
  {
    initialRouteName: "Inicio",
    defaultNavigationOptions: {
      headerTitle: 'Sinietros',
    },
    contentComponent: DrawerMenu,
    hideStatusBar: false
  }
);


const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: NAVIGATION_OPTIONS
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Auth"
  }
);

export default AppNavigator;

