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
  SignatureView,
  InputPhotographyVehicleInfo
} from '@components';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from "react-native-gesture-handler";
import { _arrayPhotos } from '@utils/Strings';
import { URL_API_IMAGE } from '../../core/api/endpoints'

const iconDriverPhoto = require('@assets/icons/driver-no-image.png');

export default class VehicleModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _arrayPhotos: [],
    }
  }

  componentDidMount() {
    const { vehiculosDetallado } = this.props;
    const newArrayTmp = [];
    newArrayTmp.push(URL_API_IMAGE + vehiculosDetallado.foto_delantera)
    newArrayTmp.push(URL_API_IMAGE + vehiculosDetallado.foto_trasera)
    newArrayTmp.push(URL_API_IMAGE + vehiculosDetallado.foto_costado_derecho)
    newArrayTmp.push(URL_API_IMAGE + vehiculosDetallado.foto_costado_izquierdo)
    
    this.setState({
      _arrayPhotos: newArrayTmp
    })
  }

  render() {
    const { state, icon, iconName, vehiculosDetallado } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center" }} forceInset={{ top: 'always', horizontal: 'never' }}>


        <Modal isVisible={this.props.showModal}
          animationIn={"fadeIn"}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight * 0.8}
          coverScreen={true}
          backdropOpacity={0.1}
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
          }}
          propagateSwipe={true}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, }}>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View style={{
                width: "100%",
                padding: 15,
                alignSelf: "center",

              }}>
                <View style={styles.containerTitle}>
                  <Text style={styles.titles}>Información del vehículo</Text>

                  <MaterialCommunityIcons
                    name={"close-circle"}
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


                  <InputFieldNoBorder
                    label="Placa del Vehículo"
                    value={vehiculosDetallado.placa_vehiculo}
                    
                  />


                  <View style={{ marginTop: 20 }}>
                    <View style={styles.rowView}>

                      <View style={styles.rowViewLeft}>
                        <InputFieldNoBorder
                          label="Servicio"
                          value={vehiculosDetallado.id_servicio}
                          
                        />
                      </View>


                      <View style={styles.rowViewRight}>
                        <InputFieldNoBorder
                          label="Linea"
                          value={vehiculosDetallado.id_linea}
                          
                        />
                      </View>
                    </View>

                    <View style={styles.rowView}>

                      <View style={styles.rowViewLeft}>
                        <InputFieldNoBorder
                          label="Color"
                          value={vehiculosDetallado.id_color}
                          
                        />
                      </View>


                      <View style={styles.rowViewRight}>
                        <InputFieldNoBorder
                          label="Combustible"
                          value={vehiculosDetallado.id_combustible}
                          
                        />
                      </View>
                    </View>

                    <InputFieldNoBorder
                      label="Tipo de Vehículo"
                      value={vehiculosDetallado.id_tipo_vehiculo}
                      
                    />

                    <View style={styles.rowView}>

                      <View style={styles.rowViewLeft}>
                        <InputFieldNoBorder
                          label="Marca"
                          value={vehiculosDetallado.id_tipo_vehiculo}
                          
                        />
                      </View>


                      <View style={styles.rowViewRight}>
                        <InputFieldNoBorder
                          label="Modelo"
                          value={vehiculosDetallado.modelo_vehiculo}
                          
                        />
                      </View>
                    </View>

                    <InputFieldNoBorder
                      label="Kilometraje"
                      value={vehiculosDetallado.kilometraje_vehiculo}
                      
                    />

                    {
                      this.state._arrayPhotos.map((data, index) => {
                        return (
                          <View style={{
                            marginTop: 20,
                          }}>
                            <InputPhotographyVehicleInfo
                              Photo={data}
                              Label={'Delantera'}
                            />
                          </View>
                        )
                      })
                    }


                  </View>
                </View>
                <View style={styles.buttonGradientView}>
                  <ButtonGradient
                    OnClick={() => this.props.Accept()}
                    Text={"Aceptar"}
                    icon={false}
                  />
                </View>
                {/* <Button title="Hide modal" onPress={() => this.props.CloseModal()} /> */}
              </View>
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
  rowView: {
    marginTop: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  rowViewLeft: {
    marginTop: 0,
    width: "46%",
    justifyContent: "flex-start",
  },
  rowViewRight: {
    marginTop: 0,
    width: "46%",
    justifyContent: "flex-end"
  },
})