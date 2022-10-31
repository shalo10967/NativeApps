import React, { Component } from "react";

import {
  ButtonGradient,
  InputField,
  Button as ButtonComponent,
} from '@components';
import { TextInput, HelperText, Colors, NativeTextInput, IconButton } from 'react-native-paper';
import { h, w, totalSize } from '@utils/Dimensiones';
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from '@styles';
import { Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from '@connectedbits/react-native-image-picker';


export default class InputPhotography extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  selectFile = async (index) => {

    var options = {
      title: 'Seleccionar imagen',
      takePhotoButtonTitle: "Tomar una foto...",
      chooseFromLibraryButtonTitle: "Seleccionar de la galería...",
      cancelButtonTitle: "Cancelar",
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        // this.setState({
        //   resourcePath: source.data,
        // });
        console.log("source: ", source);
        this.props.SetImage(source.data, index)
      }
    });
  };


  render() {
    let { error } = this.props;
    const { icon, Photos, ShowButtons } = this.props;
    const hasError = error !== '';
    return (

      Photos.map((data, index) => {
        return (
          <View 
          key={index}
          style={styles.buttonGradient}>
            <TouchableOpacity
              onPress={() => data === '' ? this.selectFile(index) : null}
              disabled={(data === '' && ShowButtons !='none') ? false : true}
            >
              {data != ''
                ?
                <View style={styles.photoContainer}>
                  <Image
                    source={{
                      uri: this.props.url === true ? data : 'data:image/jpeg;base64,' + data,
                    }}
                    resizeMode={"cover"}
                    style={styles.imageStyle}
                  />
                </View>
                :
                <View style={styles.photoContainer}>
                  <Text style={styles.titles}>
                    Tomar Foto
                  </Text>
                  <MaterialCommunityIcons
                    name={"camera-outline"}
                    style={{ ...styles.titles, marginLeft: 10, fontSize: 25 }}
                    color={colors.titleColor}
                  />
                </View>}

            </TouchableOpacity>

            {(data !== '' && ShowButtons !='none') ? 
              <View style={styles.buttonGradientView}>
                <ButtonComponent
                  OnClick={() => this.selectFile(index)}
                  Text={"Corregir"}
                  icon={true}
                  iconName={'reload'}
                />
              </View> :
              null}
                      {hasError &&
          <HelperText type="error" visible={hasError} style={icon && { marginLeft: w(0) }}>
            {error}
          </HelperText>
        }
          </View>
        )
      })
    )
  }
}

const styles = StyleSheet.create({
  buttonGradient: {
    width: "100%",
    alignContent: "center",
    marginBottom: 15
  },
  titles: {
    color: colors.colorPrimary,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  icon: {
    marginRight: 10,
    fontWeight: "bold"
  },
  photoContainer: {
    width: "100%",
    height: h(25),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColor,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  buttonGradientView: {
    width: "100%",
    alignContent: "center",
    alignSelf: "center",
    elevation: 10,
  },
})


