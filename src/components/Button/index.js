import React, { Component } from "react";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from '@styles';
import { Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Button extends Component {
  render() {
    const { state, icon, iconName } = this.props;
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#fff", "#fff"]}
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
            flex: 1,

          }}
          onPress={() => this.props.OnClick()}
        //loading={isWaiting}
        >
          {icon ?
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
  }
})


