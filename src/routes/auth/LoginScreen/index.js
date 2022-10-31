import LinearGradient from 'react-native-linear-gradient';

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Image,
  Platform,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import { Button, Colors, Text } from 'react-native-paper';

import { LOGIN_INICIO } from '@utils/Mensajes';
import { h, w, totalSize } from '@utils/Dimensiones';
import { isPublicEmail, isValidEmail } from '@utils/EmailValidations';
import { colors } from '@styles';
import {
  Link,
  MensajeContextual,
  InputField,
  RightTriangle,
  InputDropdownSearchable, Loader,
  ModalInfo
} from '@components'
import {
  actionEmpresasListaObtener,
  actionAuthLogin,
  actionLimpiarEstado
} from '@core/store/ACCIONES';
import styles from './style'
import ENV from '@config'

import SplashScreen from 'react-native-splash-screen'

import { VERSION } from "../../../../src/config";

const companyLogo = require('@assets/images/companylogo.png');

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disableLogin: false,
    }
  }

  componentWillMount() {
    SplashScreen.hide();
  }

  async componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    const { usuario, navigation } = this.props
    if (prevProps.usuario != usuario) {
      navigation.navigate('AuthLoading');
    }
  }



  async login() {
    this.props.navigation.navigate('App');
  }

 

  render() {
    const { isWaiting } = this.props

    return (
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 0.75, y: 0 }}
        colors={colors.linearGradient} style={{ ...styles.linearGradient }}>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, display: "flex" }}
            nestedScrollEnabled={true}
          >
            <KeyboardAvoidingView style={{ flex: 1, display: "flex" }} behavior="padding" enabled={false}>
              <View style={styles.pagina}>

                <View style={styles.logo}>
                  <Image style={styles.icon} resizeMode="contain" source={companyLogo} />
                </View>
                <View style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  marginVertical: -50
                }}>

                  <RightTriangle />
                </View>
                <View style={styles.formulario}>
                  <View style={{ width: "100%", marginTop: -70 }}>
                    <Text style={styles.title}>
                      Inicia sesión para continuar
                    </Text>

                  </View>

                  <View>

                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0.75, y: 0 }}
                      colors={colors.linearGradient}
                      style={{ ...styles.linearGradient, ...styles.buttonGradient }}
                    >
                      <TouchableOpacity
                        //mode="contained"
                        style={{ width: "100%", alignContent: "center", paddingVertical: 15, }}
                        onPress={this.login.bind(this)}
                        loading={isWaiting}
                      >
                        <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "bold" }}>
                          INICIAR SESIÓN
                        </Text>

                      </TouchableOpacity>

                    </LinearGradient>

                    <Text style={styles.version}>{VERSION}</Text>
                  </View>
                </View>
              </View>
              <Loader isLoading={this.props.isWaiting} />

            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );

  }
};


const mapStateToProps = ({ }) => ({
  isWaiting: false,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
