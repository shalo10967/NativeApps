import * as React from 'react';
import { Colors, List } from 'react-native-paper';
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { h, w, totalSize } from '@utils/Dimensiones';
import { VERSION } from "../../src/config";
import { store } from './../core/store';
import { actionAuthCerrarSesion } from '@core/store/ACCIONES';


const companyLogo = require('@assets/images/companylogo-noleyenda.png');
const backImage = require('@assets/icons/ic_arrow-backmdpi.png');
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
export const _signOutAsync = async (navigation) => {
  store.dispatch(actionAuthCerrarSesion({}))
  await AsyncStorage.clear();
  navigation.navigate('Auth');
};

let storeTmp = async () => ({
  store: store.getState()
});

let user = {};

export default DrawerMenu = ({ navigation, props }) => {

  storeTmp().then((res) => {
    user = res.store.reducerSesion.usuario
  })
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View
        style={{ width: "100%" }}
        onPress={() => navigation.toggleDrawer()}
        storeTmp
      >

        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            position: "relative",
            alignSelf: "flex-end", marginRight: 0,
            marginTop: h(2),
          }}>
          <Image
            style={{
              height: h(2),
              alignSelf: "flex-end",
              marginTop: h(1)
            }}
            resizeMode="contain"
            source={backImage}
          />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image style={styles.icon} resizeMode="contain" source={companyLogo} />
        </View>
      </View>


      <View style={styles.itemsContainer}>
        <View style={{ flex: 1 }}>
          <List.Item
            title="Inicio"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.grey200,
            }}
            onPress={() => navigation.toggleDrawer()}
          />
            <List.Item
              title="Siniestros"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.grey200,
              }}
              onPress={() => navigation.navigate('SiniestroSearch') }
            />

        </View>
        <View style={{
          borderTopWidth: 1,
          borderTopColor: Colors.grey200,
          marginBottom: 10
        }}>
          <List.Item
            title="Cerrar sesión"
            titleStyle={{ textAlign: "center", fontWeight: "bold" }}
            style={{ alignItems: "center" }}
            onPress={() => {
              _signOutAsync(navigation)
              
            }}
          />
          <Text style={styles.version}>{VERSION}</Text>
        </View>
      </View>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  logo: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: -10
  },
  icon: {
    height: h(15),
    alignSelf: "center"
  },
  itemsContainer: {
    flex: 9,
    alignContent: "space-between",
    marginTop: h(2)
  },
  version: {
    color: Colors.grey600,
    fontSize: totalSize(1.2),
    paddingHorizontal: w(3)
  }
});
