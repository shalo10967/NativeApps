import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { w, h, totalSize } from '@utils/Dimensiones';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import DatePicker from 'react-native-date-picker';

import { TextInput, HelperText, Colors, NativeTextInput, IconButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from '@styles';
import moment from 'moment';

export default class InputDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDatePicker: false,
    }
  }

  visibilidadClave() {
    this.setState({ secureTextEntry: !this.state.secureTextEntry })

  }

  changueInput = (date) => {
    this.setState({
      openDatePicker: false,
    })
    //moment(date).format("DD-MM-YYYY")
    this.props.SetDate(moment(date).format("YYYY-MM-DD"));
  }

  render() {
    let { icon, iconRightName, focused, containerStyle, error, label, value, onChangeText, iconRight, iconRightColor, familyIcon } = this.props;
    let { autoCapitalize, autoCorrect, secureTextEntry, underlineColorAndroid, placeholder } = this.props;
    let { requerido, style, ayuda, keyboardType, } = this.props;
    const hasError = error !== ''
    return (
      <View style={[containerStyle]} >
        <TouchableOpacity
          onPress={() => this.setState({
            openDatePicker: true,
          })}
          style={[styles.container,
          {
            borderColor: this.props.style ? this.props.style.borderColor : "black",
          }, hasError ? styles.containerError : {}]}>

          {(iconRight && !hasError) &&
            (familyIcon && familyIcon === "feather")
            ? <Feather
              name={iconRightName}
              size={totalSize(2.5)}
              style={styles.icon}
              color={hasError ? "#d61a0c" : iconRightColor}
            /> : null
          }
          <DateTimePickerModal
            isVisible={this.state.openDatePicker}
            mode="date"
            onConfirm={(date) => {
              this.changueInput(date)
            }}
            onCancel={(e) => this.setState({
              openDatePicker: false
            })}

          />
          <View style={styles.containerText}>
            <View style={{ width: "90%" }}>
              <Text style={styles.placeHolder}>{this.props.label}</Text>
            </View>

            <View style={{ width: "10%", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="calendar-blank"
                size={25}
                color={hasError ? "#d61a0c" : colors.colorPrimary}
              />
            </View>
          </View>

        </TouchableOpacity>
        <View style={{ backgroundColor: "#FFF", width: "93%", height: 2, marginTop: 45.5, position: "absolute", alignSelf: "center" }} />
        {(!hasError && ayuda) && <HelperText type="info" style={icon && { marginLeft: w(0) }}>
          {ayuda}
        </HelperText>}
        {hasError &&
          <HelperText type="error" visible={hasError} style={icon && { marginLeft: w(0) }}>
            {error}
          </HelperText>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: '#d61a0c'
  },
  container: {
    backgroundColor: '#ffffff44',
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 1.5,
    justifyContent: "center",
    marginBottom: 15,
    overflow: 'hidden',
  },
  containerError: {
    flex: 1,
    borderColor: '#d61a0c',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 1.5,
    color: '#d61a0c',
    alignItems: "center",
    marginBottom: 0,
  },
  inputText: {
    backgroundColor: "transparent",
    flex: 1,
    fontSize: 16,

    marginTop: 0,
  },
  icon: {
    paddingTop: h(1),
    marginRight: w(0),
    alignSelf: "center"
  },
  iconRight: {
    paddingTop: h(1),
    right: 5,
    bottom: h(0),
    position: "absolute",
  },
  iconError: {
    right: 10,
    bottom: h(0),
    top: 15,
    position: "absolute",
  },
  containerText: {
    marginBottom: 12,
    marginTop: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  placeHolder: {
    fontSize: 16,
    color: colors.subtitleColor,
    alignSelf: "flex-start",
    marginLeft: 10
  }
});
