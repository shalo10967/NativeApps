import React, { Component } from "react";
import Modal from "react-native-modal";
import { StyleSheet, TouchableOpacity, View, Button, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from '@styles';
import { Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { w, h, totalSize, deviceWidth, deviceHeight } from '@utils/Dimensiones';
import { _arrayPhotos } from '@utils/Strings';
import {
  ButtonGradient,
  InputField,
  InputFieldNoBorder,
  SignatureView,
  InputPhotography
} from '@components';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from "react-native-gesture-handler";

import { ActivityIndicator } from 'react-native-paper';

import { URL_API_IMAGE } from '../../core/api/endpoints'

const iconDriverPhoto = require('@assets/icons/driver-no-image.png');

export default class SiniestroModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
    }
  }


  componentDidUpdate(prevProps) {
  }


  render() {
    const { state, icon, iconName } = this.props;
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
                {this.props.waitingDetalle
                  ?
                  this.props.waitingDetalle ?
                    <ActivityIndicator animating={this.props.waitingDetalle} size="large" />
                    : null
                  :
                  <View>
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



                      <View style={styles.rowView}>

                      <View style={styles.rowViewLeft}>
                          <InputFieldNoBorder
                            label="Fecha de Siniestro"
                            value={this.props.exampleData.fecha}

                          />
                        </View>


                        <View style={styles.rowViewRight}>
                          <InputFieldNoBorder
                            label="Placa"
                            value={this.props.exampleData.placa}
                          />
                        </View>
                      </View>



                      <View style={{ marginTop: 0 }}>


                        <InputFieldNoBorder
                          label="Descripcion"
                          value={this.props.exampleData.descripcion}

                        />

                        <View style={{ marginTop: 20 }}>
                          <InputPhotography
                            Photos={['data:image/png;base64,'+this.props.exampleData.photo]}
                            SetImage={(res, index) => this.setImage(res, index)}
                            ShowButtons={'none'}
                            url={true}
                          />
                        </View>

                      </View>
                    </View>
                  </View>
                }
                {
                  this.props.waitingDetalle
                    ? null
                    :
                    <View style={styles.buttonGradientView}>
                      <ButtonGradient
                        OnClick={() => this.props.CloseModal()}
                        Text={"Aceptar"}
                        icon={false}
                      />
                    </View>
                }

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