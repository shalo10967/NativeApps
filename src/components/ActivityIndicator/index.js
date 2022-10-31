import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { ActivityIndicator as Indicador } from 'react-native-paper';

export default class ActivityIndicator extends Component {
  render () {
    const { state } = this.props;
    return (
      <View style={styles.activityContainer}>
        <Indicador size="large" animating={state} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})


