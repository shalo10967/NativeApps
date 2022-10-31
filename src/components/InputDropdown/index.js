import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { w, h, totalSize } from '@utils/Dimensiones';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextInput, HelperText, Colors, NativeTextInput, IconButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from "react-native-gesture-handler";

export default class InputDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            value: null,
            items: [
                { label: 'Empresa Prueba', value: 'Empresa Prueba' },
                { label: 'Company testing', value: 'Company testing' }
            ]
        }
    }

    setValue = async (callback) => {
        const value = await callback(this.state.value)

        this.setState({
            value: value,
            open: false
        }, () => {
            this.props.onSelect(this.state.value)
        });

    }

    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items)
        }));
    }

    setOpen = (label) => {
        this.setState({
            open: true
        }, () =>
            this.props.setIdView(label, true))
    }

    setClose = (label) => {
        this.setState({
            open: false
        });
        this.props.setIdView('', false)
    }

    setNullValues = () => {
        this.setState({
            value: ''
        },() => {
            this.setValue(null)
        })
    }

    render() {
        let { icon, focused, containerStyle, error, label, value, onChangeText, iconRight, iconRightColor } = this.props;
        let { autoCapitalize, autoCorrect, secureTextEntry, underlineColorAndroid, placeholder } = this.props;
        let { requerido, style, ayuda, keyboardType } = this.props;
        const hasError = error !== ''
        return (
            <View style={[containerStyle]} >
                <View style={[styles.container,

                hasError ? styles.containerError : {},
                this.props.style ? this.props.style : {}]}
                    nestedScrollEnabled={true}>
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
                    <DropDownPicker
                        disabled={this.props.disabled}
                        placeholder={label}
                        open={
                            this.props.idOpen == label ? true : false
                        }
                        value={this.state.value}
                        items={this.props.items}
                        onClose={() => this.setClose(label)}
                        onOpen={() => this.setOpen(label)}
                        setValue={(value) => this.setValue(value)}

                        containerStyle={{
                            height: 50,
                        }}
                        style={{
                            borderColor: "transparent",
                            height: 45,
                            backgroundColor: "transparent"
                        }}
                        placeholderStyle={{
                            color: "grey",
                            fontWeight: "normal"
                        }}
                        zIndex={1000}
                        searchable={this.props.searchable ? this.props.searchable : false}
                        searchPlaceholder="Buscar..."
                        searchTextInputStyle={{
                            borderColor: "transparent"
                        }}
                        translation={{
                            NOTHING_TO_SHOW: "No se encontraron elementos"
                        }}
                        closeAfterSelecting={true}
                        closeOnBackPressed={true}
                        listMode={this.props.viewType ? "MODAL" : "SCROLLVIEW"}
                        dropDownContainerStyle={{
                            maxHeight: 1000
                        }}
                    />
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
        backgroundColor: '#fff',
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
        right: 2,
        bottom: h(0),
        top: 18,
        position: "absolute",
    },
});
