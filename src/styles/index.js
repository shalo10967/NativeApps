import { StyleSheet, Dimensions } from 'react-native';
import { h, w, totalSize } from '@utils/Dimensiones';

export const elevationShadowStyle = (elevation) => {
  return {
    elevation,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  };
}

export const colors =  {
    colorPrimary: "#FFB020",
    colorButton: "#FFD24D",
    linearGradient: ['#FFD24D', '#FFB020'],
    linearGradientDisabled: ['#C4C4C4', '#949495'],
    titleColor: "#051226",
    subtitleColor: "#949495",
    contactusColor: "#575757",
    borderColor: "#C4C4C4",
    backgroundColor: '#FFFAEC',
    textGray: '#E5E5E5',
    backgroundCards: '#F8F8F8',

}

export default StyleSheet.create({
  container: {
    flex: 1
  },
  pagina: {
    flex:1,
    backgroundColor: "#fff",
    margin: totalSize(1.8),
    marginTop: h(1)
  },
  cajaSombra: {
    backgroundColor: "#fff",
    borderRadius: totalSize(0.8),
    ...elevationShadowStyle(3),
  },
  inputStyle: {
    backgroundColor: "#fff"
  },
  tituloContainerStyle: {
    marginVertical: h(0.8)
  },
})
