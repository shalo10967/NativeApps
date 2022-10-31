import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { w, h, totalSize } from '@utils/Dimensiones';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import DatePicker from 'react-native-date-picker';

import { TextInput, HelperText, Colors, NativeTextInput, IconButton } from 'react-native-paper';
import { colors } from '@styles';

export default class InputField extends Component {

  state = {
    secureTextEntry: true
  }

  visibilidadClave() {
    this.setState({ secureTextEntry: !this.state.secureTextEntry })

  }

  render() {
    let { icon, iconRightName, focused, containerStyle, error, label, value, onChangeText, iconRight, iconRightColor, familyIcon } = this.props;
    let { autoCapitalize, autoCorrect, secureTextEntry, underlineColorAndroid, placeholder } = this.props;
    let { requerido, style, ayuda, keyboardType, editable} = this.props;
    const hasError = error !== ''
    return (
      <View style={[containerStyle]} >
        <View style={[styles.container,
          {
            borderColor: this.props.style ? this.props.style.borderColor :"black",
          }, hasError ? styles.containerError : {}]}>
          {icon &&
            <MaterialCommunityIcons
              name={icon}
              size={totalSize(3)}
              style={styles.icon}
              color={hasError ? "#d61a0c" : colors.subtitleColor }
          />}
          <TextInput
            label={label}
            value={value}
            //error={hasError}
            style={[{
              ...styles.inputText,
              height: this.props.multiline ? null :45,
            }, style]}
            onChangeText={(e) => {
              this.props.onChangeText(e)
            }}
            
            keyboardType={keyboardType}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry 
              ? this.state.secureTextEntry 
              : false}
            mode="flat"
            placeholder={placeholder}
            underlineColor={"transparent"}
            multiline={this.props.multiline ? true : false}
            disabled={this.props.disabled ? true : false}
          />
          {(iconRight && !hasError) &&
            (familyIcon && familyIcon === "feather")
            ? <Feather
              name={iconRightName}
              size={totalSize(2.5)}
              style={styles.icon}
              color={hasError ? "#d61a0c" : iconRightColor}
            /> : null
          }

          {!secureTextEntry && hasError ?
            <MaterialCommunityIcons
              name="alert-circle"
              size={totalSize(2)}
              style={styles.iconError}
              color="#d61a0c"
            />
            : secureTextEntry &&
            <IconButton
              icon={this.state.secureTextEntry ? "eye" : "eye-off"}
              size={totalSize(2.5)}
              style={styles.iconRight}
              onPress={() => this.visibilidadClave()}
              color={hasError ? "#d61a0c" : iconRightColor}
            />
          }

        </View>
        <View style={{ backgroundColor: "#FFF", width: "93%", height: 2, marginTop: 50.5, position: "absolute", alignSelf: "center" }} />
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
    paddingVertical: 5,
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
    fontSize: 14,
    padding: 0,
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
});
