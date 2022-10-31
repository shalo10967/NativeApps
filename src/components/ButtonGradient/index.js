import React, { Component } from "react";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from '@styles';
import { Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ButtonGradient extends Component {
  render() {
    const { state, icon, iconName, iconRight } = this.props;
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={!this.props.disabled ? colors.linearGradient : colors.linearGradientDisabled}
        style={{ ...styles.buttonGradient, marginTop: 15, alignSelf: "center" }}
      >
        <TouchableOpacity
          //mode="contained"
          style={{
            width: "100%",
            alignContent: "center",
            paddingVertical: 0,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}
          onPress={() => this.props.OnClick()}
          disabled={this.props.disabled}
        //loading={isWaiting}
        >
          {(icon && !iconRight)?
            <MaterialCommunityIcons
              name={iconName}
              size={30}
              style={styles.icon}
              color={colors.contactusColor}
            />
            : null
          }
          <Text style={styles.titles}>
            {this.props.Text}
          </Text>
          {(icon && iconRight)?
            <MaterialCommunityIcons
              name={iconName}
              size={30}
              style={styles.iconRight}
              color={colors.contactusColor}
            />
            : null
          }
        </TouchableOpacity>

      </LinearGradient>
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
    borderColor:"#E5E5E5",
    borderWidth: 1
  },
  titles: {
    color: colors.contactusColor,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },
  icon: {
    marginRight: 10,
    fontWeight: "bold"
  },
  iconRight: {
    marginLeft: 10,
    fontWeight: "bold"
  }
})


