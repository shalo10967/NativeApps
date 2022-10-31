import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { Card, Title, Caption, Text, Colors, Surface, TouchableRipple } from 'react-native-paper';
import { h, w, totalSize } from '@utils/Dimensiones';

import { elevationShadowStyle, colors } from '@styles'


const siniestro = require('@assets/icons/siniestro.png');


export default class GridItems extends Component {
  render() {
    const { items, onPress } = this.props;
    return (
      <View style={{...styles.container }}>
        {items.map((item, key) =>
          <TouchableOpacity
            key={key}
            onPress={() => onPress(key, item)}
            style={styles.itemContainer}
          >
            <View style={styles.itemWrap}>
              <View style={styles.itemIcon}>
                <Image
                  source={siniestro}
                  resizeMode="contain"
                  style={styles.imageStyle}
                />
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.titleStyle}>
                  {item.nombre}
                </Text>
              </View>
            </View>
          </TouchableOpacity >
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    height: 140,
    marginTop: 0
  },
  itemContainer: {
    width: "40%",
    borderRadius: 10,
    ///marginBottom: h(1.5),
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#fff",
    marginTop: 20,
    ...elevationShadowStyle(3)
  },
  itemWrap: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10
  },
  contentStyle: {
    flex: 1,
    paddingHorizontal: w(2.5),
    paddingTop: h(1.5),
    paddingBottom: h(1.5),
    justifyContent: "center"
  },
  itemIcon: {
    width: h(8),
    height: h(8),
    alignSelf: "center",
    borderRadius: 500,
    justifyContent: "center",
    backgroundColor: colors.colorButton
  },
  imageStyle: {
    width: "100%",
    height: 30,
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: colors.titleColor,
    marginTop: 10,
    justifyContent: "center"
  },
  subtitleStyle: {
    fontSize: totalSize(1.2),
    fontWeight: "normal",
    padding: 0,
    margin: 0
  }
})
