import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { View, Text, Image, Linking } from "react-native";

import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from "react-native-gesture-handler";
import { totalSize } from '@utils/Dimensiones';
import { GridItems, ButtonGradient } from '@components';
import { colors } from '@styles';



import styles from './style';


import { _signOutAsync } from '../../../navigations/DrawerMenu'
import LinearGradient from "react-native-linear-gradient";
import {
  permissionsAdmin,
  typePermissions
} from '@utils/Strings'
export const closeSesion = (error) => {
  _signOutAsync();
}
const iconCars = require('@assets/icons/cars.png');


class InicioScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tipoCliente: '',
      second: 0,
      items: [
      ]
    }

    this.navigateToAuth = this.navigateToAuth.bind(this);
  }

  screenObtieneFoco() {

  }

  async componentDidMount() {
    this.validatePermissionUser();
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps) {
  }

  validatePermissionUser = async () => {
    let newArrayPermissions = await permissionsAdmin.slice(0)
    this.setState({
      items: newArrayPermissions,
    })
  }

  renderItems(items) {
    if (items !== null) {
      if (items.length > 0) {
        return <GridItems items={items} onPress={(key, item) => { this.clickItem(item) }} />
      }
    } else {
      return null
    }
  }

  clickItem = (item) => {
    if (item.nombre.includes('Siniestro')) {
        this.props.navigation.navigate('SiniestroSearch');
    }
  }
  navigateToAuth = () => {
    //const { navigation } = this.props
    //navigation.navigate('Auth');
  }

  render() {
    const { usuario, nits } = this.props
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>

        <View style={styles.container}>
          <View style={styles.sectionTitle}>
            <Text style={{
              color: colors.titleColor,
              fontSize: totalSize(2.7),
              fontWeight: "bold",
              textAlign: "center"
            }}>
              Bienvenido
            </Text>

            <Text style={{
              color: colors.titleColor,
              fontSize: totalSize(2.7),
              fontWeight: "bold",
              textAlign: "center"
            }}>
              ¿Qué deseas hacer?
            </Text>

            <View style={{ marginTop: 20, width: "55%", alignSelf: "center" }}>
              <Image
                source={iconCars}
                resizeMode="contain"
                style={styles.imageStyle}
              />
              <View style={{
                width: "100%",
                marginHorizontal: 0,
                backgroundColor: "red",
                height: 3,
                alignSelf: "center",
                elevation: 5
              }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }} end={{ x: 0.75, y: 0 }}
                  colors={colors.linearGradient} style={{ ...styles.linearGradient }}></LinearGradient>
              </View>

            </View>
          </View>

          <View style={styles.sectionItems}>
            <ScrollView contentContainerStyle={{
              flexGrow: 1, justifyContent: "center",
              marginTop: -130
            }}>
              {this.renderItems(this.state.items)}
            </ScrollView>
          </View>



          <View style={{ width: "100%", display: "flex", flex: 1 / 2.5, marginTop: 0, marginBottom: 0, padding: 0 }}>
            <View style={{
              width: "100%",
              marginHorizontal: 0,
              height: 3,
              alignSelf: "center",
              elevation: 5,
              marginTop: 0
            }}>
              <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0.75, y: 0 }}
                colors={colors.linearGradient} style={{ ...styles.linearGradient }}></LinearGradient>
            </View>

            <View style={{
              width: "100%",
              marginTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
              <Text style={styles.titles}>¿Tiene alguna duda?</Text>
              <Text style={{
                ...styles.titles,
                marginTop: 2,
                marginLeft: 60,
                marginRight: 60
              }}>Nuestro equipo de profesionales está listo para atenderte</Text>

              <View style={styles.buttonGradientView}>
                <ButtonGradient
                  OnClick={() => Linking.openURL('https://nativapps.com/')}
                  Text={"Contáctenos"}
                  icon={true}
                  iconName={'phone'}
                />
              </View>

            </View>

          </View>

        </View>
        {/* <NavigationEvents
          onDidFocus={() => this.screenObtieneFoco()}
          onWillBlur={() => this.trazaEvento("SALIDA")}
        /> */}
      </SafeAreaView>
    );
  }
};

const mapStateToProps = ({ reducerSesion }) => {
  return {
    usuario: reducerSesion.usuario,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InicioScreen);
