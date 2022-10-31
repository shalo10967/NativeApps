import { StyleSheet, Dimensions } from 'react-native';
import { h, w, totalSize } from '@utils/Dimensiones';
import { Colors } from 'react-native-paper';
import { colors } from '@styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
  },
  sectionTitle: {
    //paddingHorizontal: w(5),
    alignSelf: "center",
    justifyContent: 'center',
    marginTop: h(10),
    width: "100%"
    //backgroundColor: Colors.green200
  },
  sectionMensaje: {
    paddingHorizontal: w(5),
    paddingVertical: h(1),
    //backgroundColor: Colors.green50
  },
  sectionItems: {
    paddingTop: 0,
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    width: "95%",
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
    width: "100%",
    alignContent: "center",
    alignSelf: "center",
    elevation: 10,
  },
  titles: {
    color: colors.contactusColor,
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold"
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
  subtitleView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
})
