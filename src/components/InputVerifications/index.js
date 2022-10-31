import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { w, h } from '@utils/Dimensiones';
import { colors } from '@styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class InputVerifications extends Component {

  state = {
    secureTextEntry: true
  }

  visibilidadClave() {
    this.setState({ secureTextEntry: !this.state.secureTextEntry })

  }

  render() {
    let { containerStyle, error, label, value, showLabel, showYes_No } = this.props;
    return (
      <View style={[containerStyle]} >
        <View style={[styles.container, {
          marginTop: showLabel !== false ? 10 : 0,
        }]}>
          {showLabel !== false
            ?
            <Text style={{
              color: colors.titleColor,
              fontSize: 16
            }}>
              {label}
            </Text>
            : null
          }

          <View style={{
            width: "100%",
            borderColor: colors.borderColor,
            alignItems: "center",
            flexDirection: "row",
            paddingTop: 5,
            marginLeft: 10
          }}>
            {showYes_No !== true ?
              <TouchableOpacity style={styles.rowsItems}
                onPress={() => this.props.setVigencia("No aplica")}
              >
                <MaterialCommunityIcons
                  name={value === "No aplica"
                    ? "checkbox-marked-circle"
                    : "checkbox-blank-circle-outline"}
                  style={{ ...styles.titles, fontSize: 25, marginRight: 5 }}
                  color={colors.colorPrimary}
                />
                <Text>No aplica</Text>
              </TouchableOpacity>
              : null}


            <TouchableOpacity style={styles.rowsItems}
              onPress={() => this.props.setVigencia("Si")}>
              <MaterialCommunityIcons
                name={value === "Si"
                  ? "checkbox-marked-circle"
                  : "checkbox-blank-circle-outline"}
                style={{ ...styles.titles, fontSize: 25, marginRight: 5 }}
                color={colors.colorPrimary}
              />
              <Text>Si</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowsItems}
              onPress={() => this.props.setVigencia("No")}>
              <MaterialCommunityIcons
                name={value === "No"
                  ? "checkbox-marked-circle"
                  : "checkbox-blank-circle-outline"}
                style={{ ...styles.titles, fontSize: 25, marginRight: 5 }}
                color={colors.colorPrimary}
              />
              <Text>No</Text>
            </TouchableOpacity>
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
  rowsItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 20
  },
  textItems: {
    color: colors.subtitleColor,
    fontSize: 14
  },

});
