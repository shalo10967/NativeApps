import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { View, Text } from "react-native";

import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from "react-native-gesture-handler";
import {
  ButtonGradient, Button as ButtonComponent,
  FlatListSiniestro,
  SiniestroModal,
  ModalInfo
} from '@components';

import styles from './style';

import {
  actionLimpiarEstado
} from '@core/store/ACCIONES';

import { ActivityIndicator } from 'react-native-paper';

import { _signOutAsync } from '../../../../navigations/DrawerMenu';
import AsyncStorage from "@react-native-community/async-storage";
import { URL_API_SINIESTROS } from "../../../../core/api/endpoints";

class SiniestroScreenSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idOpen: '',
      showModal: false,
      exampleData: null,
      results: [],
      type: null,
      search: '',
      tipoSiniestro: null,
      siniestros: [],
      resultados: ""
    }
  }

  async componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps) {
  }




  validate = async () => {
    AsyncStorage.getItem(URL_API_SINIESTROS)
    .then((res) => {
      console.log("JSON.parse(res)", JSON.parse(res))
      this.setState({
        siniestros: res != null ? JSON.parse(res) : [],
        resultados: res != null ? "" : "No se encontraron resultados..."
      })
    })
    .catch((e) => {
      console.log(e)
    })
  }

  getSiniestroInfo = (data) => {
    this.setState({
      showModal: true,
      exampleData: data
    }, () => {
      this.getDetail(data);
    })
  }

  getDetail = async (data) => {
    console.log("Data: ", data)
  }

  close = () => {
    this.setState({
      showModal: false,
      exampleData: null
    });
  }

  setIdView = (id) => {
    this.setState({
      idOpen: id,
    })
  }


  render() {
    const { idOpen } = this.state;
    console.log("data: ", this.props.siniestros)
    return (
      <SafeAreaView style={{ flex: 1 }}
        forceInset={{ top: 'always', horizontal: 'never' }}>

        <View style={styles.container}>

          <View style={styles.sectionItems}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={styles.subtitleView}>
                <Text style={{ ...styles.titles }}>
                  Siniestros Creados:
                </Text>

                <View style={{
                  width: "30%",
                  flexDirection: "row",
                  alignItems: "center"
                }}>
                      <View style={styles.buttonGradientView}>
                        <ButtonGradient
                          OnClick={() => this.props.navigation.navigate('Siniestros')}
                          Text={"Crear"}
                          icon={true}
                          iconName={"plus-circle"}
                          iconRight={true}
                        />
                      </View>

                </View>


            
              </View>

              <View style={styles.buttonGradientView}>
                <ButtonGradient
                  OnClick={() => this.validate()}
                  Text={"Buscar Siniestro"}
                  icon={false}
                />
              </View>

              <View style={styles.buttonGradientView}>
                <ButtonComponent
                  OnClick={() => this.props.navigation.goBack()}
                  Text={"Cancelar"}
                  icon={false}
                />
              </View>

                  <View style={{ marginTop: 20 }}>
                    {
                      this.state.siniestros.length > 0
                        ?
                        <FlatListSiniestro
                          Results={this.state.siniestros.map((item) => {
                            return {
                              id: item.id != undefined ? item.id : "1",
                              agregado: item.fecha,
                              ...item,
                            }
                          })}
                          GetSiniestroInfo={(data) => this.getSiniestroInfo(data)}
                        />
                        : <Text>{this.state.resultados}</Text>
                    }
                  </View>

            </ScrollView>
          </View>


          {this.state.showModal ?
            <SiniestroModal
              {...this.props}
              showModal={this.state.showModal}
              CloseModal={() => this.close()}
              exampleData={this.state.exampleData}
            />
            : null}
        </View>
      </SafeAreaView>
    );
  }
};

const mapStateToProps = ({ }) => {
  return {
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  actionLimpiarEstado
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SiniestroScreenSearch);
