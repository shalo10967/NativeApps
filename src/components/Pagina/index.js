import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Surface } from 'react-native-paper';

export default class InicioScreen extends Component {
  render () {
    const { style } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Surface style={styles.page} elevation={6}>
          {this.props.children}
        </Surface>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    margin: 16,
    padding: 16,
    borderRadius: 6
  }
})
