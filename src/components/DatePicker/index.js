import React, { Component } from 'react';
import { Text, StyleSheet, View, Platform, DatePickerAndroid, ColorPropType } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, Dialog, Portal, Button, IconButton } from 'react-native-paper';
import { h, w, totalSize } from '@utils/Dimensiones';
import { formatDate  } from '@utils/Fechas';
import { subDays, subYears, subMonths, addDays, addYears, addMonths, addHours, isThisMonth, getMonth, isBefore, isAfter } from 'date-fns';


import { UNIDAD_TIEMPO } from '@config'

export default class DatePicker extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
        fechaSeleccionada: null,
        fechaFormato: "dd/MM/yyyy",
        visible: false,
        fechaMinima: subYears(new Date(), 2),
        habilitarSiguiente: false,
        show:false
    }
  }

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  calcularProximoPeriodo (unidadTiempo) {
    const { fechaSeleccionada } = this.state
    if(!fechaSeleccionada) return
    switch(unidadTiempo) {
      case UNIDAD_TIEMPO.ANUAL:
        return addYears(fechaSeleccionada, 1)
      case UNIDAD_TIEMPO.SEMESTRAL:
        return addMonths(fechaSeleccionada, 6)
      case UNIDAD_TIEMPO.TRIMESTRAL:
        return addMonths(fechaSeleccionada, 3)
      case UNIDAD_TIEMPO.MENSUAL:
        return addMonths(fechaSeleccionada, 1)
      case UNIDAD_TIEMPO.SEMANAL:
        return addDays(fechaSeleccionada, 7)
      default: // UNIDAD_TIEMPO.DIARIO:
        return addDays(fechaSeleccionada, 1)
    }
  }

  proximoPeriodo (unidadTiempo) {
    let nuevaFecha = this.calcularProximoPeriodo(unidadTiempo)
    this.setState({ fechaSeleccionada: nuevaFecha })
    this.props.onDateChange(nuevaFecha)
  }

  anteriorPeriodo (unidadTiempo) {
    const { fechaSeleccionada } = this.state
    if(!fechaSeleccionada) return
    let nuevaFecha = null
    switch(unidadTiempo) {
      case UNIDAD_TIEMPO.ANUAL:
        nuevaFecha = subYears(fechaSeleccionada, 1)
        break;
      case UNIDAD_TIEMPO.SEMESTRAL:
        nuevaFecha = subMonths(fechaSeleccionada, 6)
        break;
      case UNIDAD_TIEMPO.TRIMESTRAL:
        nuevaFecha = subMonths(fechaSeleccionada, 3)
        break;
      case UNIDAD_TIEMPO.MENSUAL:
        nuevaFecha = subMonths(fechaSeleccionada, 1)
        break;
      case UNIDAD_TIEMPO.SEMANAL:
        nuevaFecha = subDays(fechaSeleccionada, 7)
        break;
      default: // UNIDAD_TIEMPO.DIARIO:
        nuevaFecha = subDays(fechaSeleccionada, 1)
        break;
    }
    this.setState({ fechaSeleccionada: nuevaFecha })
    this.props.onDateChange(nuevaFecha)
  }

  formatoSeleccionFecha(unidadTiempo) {
    switch(unidadTiempo) {
      case UNIDAD_TIEMPO.ANUAL:
        return 'yyyy';
      case UNIDAD_TIEMPO.SEMESTRAL:
        return 'MMM/yyyy';
      case UNIDAD_TIEMPO.TRIMESTRAL:
        return 'MMM/yyyy';
      case UNIDAD_TIEMPO.MENSUAL:
        return 'MMM/yyyy';
      default:
        return "dd/MMM/yyyy"
    }
  }

  componentDidMount () {
    this.setState({ 
      fechaSeleccionada: this.props.fecha || new Date(),
      fechaFormato: this.formatoSeleccionFecha(this.props.unidadTiempo),
      habilitarSiguiente: !isThisMonth(new Date())
    })
  }

  componentDidUpdate (prevProps, prevState) {
    const { fecha, unidadTiempo } = this.props
    if (fecha != prevProps.fecha) {
        this.setState({ 
          fechaSeleccionada: fecha,
          habilitarSiguiente: !isThisMonth(fecha)
        })
    }
    if (unidadTiempo != prevProps.unidadTiempo) {
      this.setState({ fechaFormato: this.formatoSeleccionFecha(unidadTiempo) })
    }
  }

  cambiaFecha (fecha) {
    this.setState({ 
      fechaSeleccionada: fecha
    })
  }

  seleccionada () {
    this.props.onDateChange(this.state.fechaSeleccionada)
    this._hideDialog()
  }

  async renderDatePicker () {
    if (Platform.OS === "ios" ) this._showDialog()
    else {
        const  { fecha, onDateChange } = this.props
        const { fechaMinima } = this.state
        const { action, year, month, day } = await DatePickerAndroid.open({
            mode: "spinner",
            minDate: fechaMinima,
            maxDate: new Date(),
            date: fecha
        });
        if (action === DatePickerAndroid.dismissedAction) {
            return;
        }
        this.cambiaFecha(new Date(year, month, day))
        onDateChange(this.state.fechaSeleccionada)
    }
  }

  render () {
    const { visible, fechaSeleccionada, fechaFormato, fechaMinima } = this.state
    const { unidadTiempo } = this.props
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      this.cambiaFecha(currentDate)
    };
    return (
      <View>
        <View style={{ alignItems: "center" , justifyContent: "space-between", flexDirection:"row" }}>
            <IconButton
                color="#0029f7"
                icon="chevron-left"
                disabled={isBefore(fechaSeleccionada, fechaMinima)}
                onPress={() => this.anteriorPeriodo(unidadTiempo)}
            />
            <Button
                icon="event"
                onPress={this.renderDatePicker.bind(this)}
                mode="outlined"
                style={{ borderWidth: 1, borderColor: "#0029f7" }}
            >
                {formatDate(fechaSeleccionada, fechaFormato)}
            </Button>
            <IconButton
                color="#0029f7"
                icon="chevron-right"
                disabled={isAfter(this.calcularProximoPeriodo(unidadTiempo), new Date())}
                onPress={() => this.proximoPeriodo(unidadTiempo)}
            />
        </View>
        <Portal>
            <Dialog visible={visible} onDismiss={this._hideDialog.bind(this)}>
            <Dialog.Content >
                <View >
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text>Datos disponibles desde la fecha</Text>
                    <Text style={{ fontWeight: "bold" }}>{formatDate(fechaMinima, "dd/MMM/yyyy")}</Text>
                  </View >
                    <DateTimePicker
                        testID="dateTimePicker"
                        style={{ flexGrow: 1 }}
                        locale="es"
                        value={fechaSeleccionada}
                        mode="date"
                        minimumDate={fechaMinima}
                        maximumDate={new Date()}
                        onChange={onChange}
                        display={"spinner"}
                        style={{backgroundColor: '#F5FCFF'}}
                    />
                    <Button
                        onPress={this.seleccionada.bind(this)}
                        mode="outlined"
                        icon="check"
                    >
                        Seleccionar
                    </Button>
                </View>
            </Dialog.Content>
            </Dialog>
        </Portal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
