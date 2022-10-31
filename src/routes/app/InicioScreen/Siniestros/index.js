import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { View, Text } from "react-native";

import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from "react-native-gesture-handler";
import {
  ButtonGradient, Button as ButtonComponent,
  ModalInfo,
  InputDate,
  InputField,
  InputPhotography
} from '@components';
import { colors } from '@styles';
import styles from './style';

import {
  actionSiniestrosCrear,
  actionLimpiarEstado
} from '@core/store/ACCIONES';

import { ActivityIndicator } from 'react-native-paper';

import { _signOutAsync } from '../../../../navigations/DrawerMenu';

class Siniestros extends Component {

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
      showModalInfo: false,
      photos: ['',],
      error_photos: "",
      descripcion: '',
      fecha: "",
      error_fecha: "",
      error_descripcion: "",
      placa: "",
      error_placa: ""
    }
  }

  async componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps) {
    if (this.props.apiRespuesta) {
      switch (this.props.estado) {
        case "CREADO":
          this.setState({
            showModalInfo: true
          })
          break;
        default:
          break;
      }
      this.props.actionLimpiarEstado()
    }
  }


  validarCampos = (campo, valor) => {
    if (valor.trim() == '') {
      this.setState({ [campo]: 'Campo obligatorio.' })
    } else {
      this.setState({ [campo]: '' })
    }
  }


  validate = async () => {
    const {
      fecha,
      photos,
      descripcion,
      placa,
    } = this.state

    var tmpArrayfieldsErrors = [
      {
        error: 'error_placa',
        value: placa
      },
      {
        error: 'error_fecha',
        value: fecha
      },
      {
        error: 'error_photos',
        value: photos[0]
      },
      {
        error: 'error_descripcion',
        value: descripcion
      },
    ];

    for (let index = 0; index < tmpArrayfieldsErrors.length; index++) {
      let element = tmpArrayfieldsErrors[index];
      await this.validarCampos(element.error, element.value)
    }


    if (!this.state.error_placa &&
      !this.state.error_fecha &&
      !this.state.error_photos &&
      !this.state.error_descripcion) {
      console.log("Front params")
      this.props.actionSiniestrosCrear({
        placa: this.state.placa,
        photo: this.state.photos[0],
        descripcion: this.state.descripcion,
        fecha: this.state.fecha
      })
    }
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

  setImage = async (res, index) => {
    var arrayPhotoCopy = await [...this.state.photos];
    arrayPhotoCopy[index] = await res;

    this.setState({
      photos: arrayPhotoCopy
    });
  }

  changeInput(campo, valor) {
    this.setState({ [campo]: valor })
  }

  render() {
    const { idOpen } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}
        forceInset={{ top: 'always', horizontal: 'never' }}>

        <View style={styles.container}>

          <View style={styles.sectionItems}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={styles.subtitleView}>
                <Text style={{ ...styles.titles }}>
                  Crear Siniestro:
                </Text>
              </View>

              {this.props.waiting ?
                <ActivityIndicator animating={this.props.waiting} size="large" />
                : null
              }
              <View style={{ marginTop: 10 }}>

                <InputField
                  icon="clock-time-eight-outline"
                  label="Placa"
                  value={this.state.placa}

                  containerStyle={{}}
                  error={this.state.error_placa}
                  onChangeText={placa => this.changeInput('placa', placa)}
                  style={{ borderColor: colors.colorPrimary, }}
                //ayuda="Ejemplo: correo@empresa.com.co"
                />

                <InputDate
                  label={this.state.fecha != '' ? this.state.fecha : "Fecha del siniestro"}
                  style={{
                    backgroundColor: '#FFFAEC',
                    borderColor: colors.colorPrimary
                  }}
                  SetDate={(e) => this.changeInput('fecha', e)}
                  error={this.state.error_fecha}
                />
                <Text style={{ marginTop: 10, fontWeight: "bold", marginBottom: 10 }}>Fotografía del siniestro</Text>
                <InputPhotography
                  Photos={this.state.photos}
                  SetImage={(res, index) => this.setImage(res, index)}
                  error={this.state.error_photos}
                />

                <InputField
                  label="Descripción  (250 caracteres)"
                  value={this.state.descripcion}

                  containerStyle={{}}
                  error={this.state.error_descripcion}
                  onChangeText={descripcion => this.changeInput('descripcion', descripcion)}
                  style={{ borderColor: colors.colorPrimary, }}
                  multiline={true}
                />
              </View>


              <View style={styles.buttonGradientView}>
                <ButtonGradient
                  OnClick={() => this.validate()}
                  Text={"Crear Siniestro"}
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


          {this.state.showModalInfo ?
            <ModalInfo
              {...this.props}
              icon={"information-outline"}
              text={"Información agregada con exito!"}
              //text2={"¿Esta seguro que desea continuar?"}                
              showModal={this.state.showModalInfo}
              showCancel={false}
              onConfirm={() => {
                this.setState({
                  showModalInfo: false,
                }, () => {
                  this.props.navigation.goBack()
                })
              }}
            />
            : null}

        </View>
      </SafeAreaView>
    );
  }
};

const mapStateToProps = ({ reducerSiniestros }) => {
  return {
    siniestros: reducerSiniestros.data ? reducerSiniestros.data : [],
    waiting: reducerSiniestros.waiting,
    estado: reducerSiniestros.estado,
    apiRespuesta: reducerSiniestros.apiRespuesta,

    estadoDetalle: reducerSiniestros.estado,
    apiRespuestaDetalle: reducerSiniestros.apiRespuesta,

    error: reducerSiniestros.mensaje,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  actionSiniestrosCrear,
  actionLimpiarEstado
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Siniestros);
