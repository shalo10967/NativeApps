import React, { Component } from "react";
import Modal from "react-native-modal";
import { StyleSheet, TouchableOpacity, View, Button, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from '@styles';
import { Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { w, h, totalSize, deviceWidth, deviceHeight } from '@utils/Dimensiones';
import {
  ButtonGradient,
  InputField,
  InputFieldNoBorder,
} from '@components';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from "react-native-gesture-handler";
import { URL_API_IMAGE } from '../../core/api/endpoints'

const iconDriverPhoto = require('@assets/icons/driver-no-image.png');

export default class DriverModal extends Component {
  render() {
    const { state, icon, iconName, conductoresDetallado } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>


        <Modal isVisible={this.props.showModal}
          animationIn={"fadeIn"}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          coverScreen={true}
          backdropOpacity={0.1}
          propagateSwipe={true}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>


            <View style={{
              width: "100%",
              padding: 15,
              alignSelf: "center",
              backgroundColor: "#fff",
              borderRadius: 8,
            }}>
              <View style={styles.containerTitle}>
                <Text style={styles.titles}>Datos del conductor</Text>

                <MaterialCommunityIcons
                  name={"close"}
                  size={30}
                  style={{
                    fontWeight: "bold",
                  }}
                  onPress={() => this.props.CloseModal()}
                  color={colors.colorPrimary}
                />
              </View>

              <View style={{
                marginTop: 15
              }}>
                <Text style={styles.subTitles}>Foto del conductor</Text>
                
                <Image
                  source={{
                    uri: URL_API_IMAGE + conductoresDetallado.foto_conductor
                  }}
                  resizeMode="contain"
                  style={styles.imageStyle}
                />


                <Text style={{
                  ...styles.titles,
                  marginTop: 10,
                  fontWeight: "normal",
                  fontSize: 16
                }}>Información del conductor</Text>

                <View style={{ marginTop: 0 }}>
                  <InputFieldNoBorder
                    label="Nombre Completo"
                    value={conductoresDetallado.nombre_conductor + " " + conductoresDetallado.apellido_conductor}

                  />

                  <InputFieldNoBorder
                    label="Documento de Identidad"
                    value={conductoresDetallado.numero_documento}

                  />

                  <InputFieldNoBorder
                    label="Teléfono"
                    value={conductoresDetallado.telefono_conductor}

                  />

                  <InputFieldNoBorder
                    label="Correo electrónico"
                    value={conductoresDetallado.correo_conductor.toLowerCase()}

                  />

                  <InputFieldNoBorder
                    label="Tipo de sangre"
                    value={conductoresDetallado.id_tipo_sangre}

                  />
                </View>
              </View>
              <View style={styles.buttonGradientView}>
                <ButtonGradient
                  OnClick={() => this.props.NavigateToPhoto()}
                  Text={"Aceptar"}
                  icon={false}
                />
              </View>
              {/* <Button title="Hide modal" onPress={() => this.props.CloseModal()} /> */}
            </View>
          </ScrollView>
        </Modal>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  buttonGradient: {
    width: "100%",
    alignContent: "center",
    borderRadius: 8,
    elevation: 1,
    height: 40,
    borderColor: "#E5E5E5",
    borderWidth: 1
  },
  titles: {
    color: colors.titleColor,
    fontSize: 18,
    fontWeight: "bold"
  },
  subTitles: {
    color: colors.titleColor,
    fontSize: 14
  },
  icon: {
    marginRight: 10,
    fontWeight: "bold"
  },
  containerTitle: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  imageStyle: {
    width: w(25),
    height: w(25),
    borderRadius: 8,
    borderWidth: 1,
    padding: 0.5,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.borderColor,
    marginTop: 10
  },
  buttonGradientView: {
    width: "100%",
    alignContent: "center",
    alignSelf: "center",
    elevation: 10,
  },
})