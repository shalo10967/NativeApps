import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'react-native-paper';

import { h, w, totalSize } from '@utils/Dimensiones';
//import Constants from 'expo-constants';
import { colors } from '@styles'

export default StyleSheet.create({
  title: {
    color: colors.titleColor,
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
  },
  subtitle: {
    color: colors.subtitleColor,
    fontSize: 14,
    marginTop: 5,
    alignSelf: "center",
    textAlign: "center",
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 40,
    borderTopWidth: 40,
    borderRightColor: "transparent",
    borderTopColor: Colors.white,
    transform: [{ rotate: "180deg" }],
    position: "absolute",
  },
  triangleOrange: {
    width: "100%",
    height: 30,
    transform: [{ rotate: '90deg'}],
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  linearGradient: {
    flex: 1,
    height: "100%"
  },
  container: {
    flex: 1,
    marginTop:  10 + h(1)//Constants.statusBarHeight 
  },
  pagina: {
    justifyContent: "space-around",
    padding: 0,
    display: "flex",
    flex: 1,
  },

  logo: {
    height: h(25),
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: h(6)
  },
  icon: {
    width: "80%",
  },
  completeCenterTriangle: {
      width: 50,
      height: 44,
      backgroundColor: Colors.white,
      borderStyle: 'solid',
      position: "absolute",
      alignSelf: "flex-end",
      marginTop: h(39),
  },
  centerTriangle: {
    flex: 1,
    flexGrow: 1,
    display:"flex",
    alignSelf: "center",
    marginTop: h(4),
    height: 0,
    backgroundColor: Colors.white,
    width:"80%"
  },
  formulario: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 30,
    paddingBottom: 0,
    width: "100%",
    marginBottom: 0,
    backgroundColor: Colors.white
  },
  piePagina: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  boton: {
    marginVertical: h(2),
    padding: totalSize(0.3),
    fontSize: totalSize(1.2),
    fontWeight: '600'
  },
  inputStyle: {
    backgroundColor: "#fff",
    flex: 1
  },
  errorApiContainer: {
    marginTop: h(1),
    alignItems: "center",
    marginHorizontal: w(5)
  },
  errors: {
    fontSize: totalSize(1.6),
    color: '#d61a0c',
    textAlign: "center"
  },
  version: {
    color: Colors.grey600,
    fontSize: totalSize(1.2),
    paddingHorizontal: 0,
    marginBottom: 0
  },
  buttonGradient: {
    width: "100%",
    alignContent: "center",
    
    borderRadius: 15,
    elevation: 1
  }
})

