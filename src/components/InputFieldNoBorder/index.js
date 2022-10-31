import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { w, h } from '@utils/Dimensiones';
import { colors } from '@styles';

export default class InputFieldNoBorder extends Component {

  state = {
    secureTextEntry: true
  }

  visibilidadClave() {
    this.setState({ secureTextEntry: !this.state.secureTextEntry })

  }

  render() {
    let { containerStyle, error, label, value } = this.props;
    return (
      <View style={[containerStyle]} >
        <View style={[styles.container]}>
          <Text style={{
            color: colors.titleColor,
            fontSize: 14
          }}>
            {label}
          </Text>

          <View style={{
            width: "100%",
            borderColor: colors.borderColor,
            borderWidth: 1,
            borderRadius: 8,
            marginTop: 10,
            paddingLeft: 5,
            paddingTop: 10,
            paddingBottom: 10,
            justifyContent: "center"
          }}>
            <Text style={{
              color: colors.titleColor,
              fontSize: 12,
            }}>
              {value}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: '#d61a0c'
  },
  container: {
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
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
    height: 45,
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
