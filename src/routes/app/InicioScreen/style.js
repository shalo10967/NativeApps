import { StyleSheet, Dimensions } from 'react-native';
import { h, w, totalSize } from '@utils/Dimensiones';
import { Colors } from 'react-native-paper';
import { colors } from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  sectionTitle: {
    //paddingHorizontal: w(5),
    alignSelf: "center",
    justifyContent: 'center',
    marginTop: 35,
    width: "100%"
    //backgroundColor: Colors.green200
  },
  sectionMensaje: {
    paddingHorizontal: w(5),
    paddingVertical: h(1),
    //backgroundColor: Colors.green50
  },
  sectionItems: {
    flex: 1/1.2,
    paddingTop: 0,
    marginTop: 0,
    justifyContent: "center",
    alignContent: "center"
  },
  imageStyle: {
    width: "100%",
    height: h(8),
    backgroundColor: "#fff"
  },
  linearGradient: {
    flex: 1,
    height: "100%"
  },
  buttonGradientView: {
    width: "45%",
    alignContent: "center",
    alignSelf: "center"
    // borderRadius: 8,
    // elevation: 1,
    // height: 40
  },
  titles: {
    color: colors.contactusColor,
    fontSize: 16,
    textAlign: "center"
  }
})
