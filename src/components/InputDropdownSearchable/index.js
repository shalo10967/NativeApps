import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, } from 'react-native';
import { w, h, totalSize } from '@utils/Dimensiones';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextInput, HelperText, Colors, NativeTextInput, IconButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

export default class InputDropdownSearchable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            value: null,
            items: [
                { label: 'Empresa Prueba', value: 'Empresa Prueba2' },
                { label: 'Company testing', value: 'Company testing2' }
            ]
        }
    }

    setValue(callback) {
        this.setState(state => ({
            value: callback(state.value),
            open: false
        }), () => {
            this.props.onSelect(this.state.value)
        });
    }

    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items)
        }));
    }

    setOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let { icon, focused, containerStyle, error, label, value, onChangeText, iconRight, iconRightColor } = this.props;
        let { autoCapitalize, autoCorrect, secureTextEntry, underlineColorAndroid, placeholder } = this.props;
        let { requerido, style, ayuda, keyboardType } = this.props;
        const hasError = error !== ''
        return (
            <View style={[containerStyle]} >
                <View style={[styles.container, hasError ? styles.containerError : {}]}>
                    {!secureTextEntry && hasError ?
                        <MaterialCommunityIcons
                            name="alert-circle"
                            size={totalSize(2)}
                            style={styles.iconError}
                            color="#d61a0c"
                        />
                        : secureTextEntry &&
                        <IconButton
                            icon={this.state.secureTextEntry ? "visibility" : "visibility-off"}
                            size={totalSize(3)}
                            style={styles.iconRight}
                            onPress={() => this.visibilidadClave()}
                            color={hasError ? "#d61a0c" : iconRightColor}
                        />
                    }
                    <View style={{flexDirection: 'row'}}>
                    <DropDownPicker
                        placeholder={label}
                        open={this.state.open}
                        value={this.state.value}
                        items={this.props.items}
                        setOpen={() => this.setOpen()}
                        setValue={(value) => this.setValue(value)}
                        //setItems={(items) => this.setItems(items)}
                        containerStyle={{
                            height: 50,
                        }}
                        style={{
                            borderColor: "transparent",
                            height: 45,
                            backgroundColor: "#fff"
                        }}
                        placeholderStyle={{
                            color: "grey",
                            fontWeight: "normal"
                        }}
                        zIndex={1000}
                        searchable={true}
                        searchPlaceholder="Buscar..."
                        searchTextInputStyle={{
                            borderColor: "transparent"
                        }}
                        translation={{
                            NOTHING_TO_SHOW: "No se encontraron elementos"
                        }}
                        closeAfterSelecting={true}
                        closeOnBackPressed={true}
                        listMode="MODAL" 
                    />
                    </View>
                </View>
                {(!hasError && ayuda) && <HelperText type="info" style={icon && { marginLeft: w(7) }}>
                    {ayuda}
                </HelperText>}
                {hasError &&
                    <HelperText type="error" visible={hasError} style={icon && { marginLeft: w(7) }}>
                        {error}
                    </HelperText>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    error: {
        color: '#d61a0c'
    },
    container: {
        backgroundColor: '#ffffff44',
        flexDirection: 'row',
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 1.5,
        justifyContent: "center",
        zIndex: 1000,
        marginBottom: 15,
    },
    containerError: {
        flex: 1,
        borderColor: '#d61a0c',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 1,
        color: '#d61a0c',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
    },
    inputText: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        fontSize: totalSize(10),
    },
    icon: {
        paddingTop: h(2),
        marginRight: w(0),
        alignSelf: "center"
    },
    iconRight: {
        paddingTop: h(0),
        right: 5,
        bottom: h(0),
        position: "absolute",
    },
    iconError: {
        right: 10,
        bottom: h(0),
        top: 30,
        position: "absolute",
    },
});
