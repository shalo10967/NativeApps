import React, { Component } from "react";

import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import { Button, Dialog, Portal, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '@styles';
import { w, h } from '@utils/Dimensiones';
import {
    GridItems,
    MensajeContextual,
    ButtonGradient,
    InputField,
    Button as ButtonComponent,
    SignatureView,
    VehicleModal,
    InputVerifications,
    
} from '@components';

export default class ModalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: true,
        }
    }


    render() {
        const { icon, text, text2, showCancel } = this.props;
        return (
            this.props.showModal === true ?
            <Portal>
                <Dialog dismissable={false} visible={this.state.showModal}>
                    <Dialog.Content>
                        <View style={{ paddingVertical: 0 }}>
                            <View style={{ justifyContent: "center" }}>
                                <MaterialCommunityIcons
                                    name={icon}
                                    style={{ ...styles.titles, marginLeft: 0, fontSize: 50, color: colors.colorPrimary }}
                                    color={colors.colorPrimary}
                                />

                                <Text style={styles.titles}>{text}</Text>
                                {text2 ?
                                    <Text style={{
                                        ...styles.titles,
                                        marginTop: 10
                                    }}>{text2}</Text>
                                    : null}

                            </View>


                        </View>
                    </Dialog.Content>
                    <Dialog.Actions style={{ marginTop: -25 }}>
                        <View style={{
                            flex: 1, flexDirection: "row",
                            alignContent: "center", alignItems: "center", justifyContent: "space-between", margin: 10
                        }}>
                            {
                                showCancel !== false
                                    ?
                                    <View style={styles.buttonGradientView}>
                                        <ButtonComponent
                                            OnClick={() => this.props.onCancel()}
                                            Text={"Cancelar"}
                                            icon={false}
                                        />
                                    </View>
                                    : null
                            }


                            <View style={{ ...styles.buttonGradientView, width: showCancel === false ? "100%" : "45%", }}>
                                <ButtonGradient
                                    OnClick={() => this.props.onConfirm()}
                                    Text={"Aceptar"}
                                    icon={false}
                                />
                            </View>
                        </View>

                    </Dialog.Actions>
                </Dialog>
                </Portal>
                : null
        );
    }
}

const styles = StyleSheet.create({
    buttonGradient: {
        width: "100%",
        alignContent: "center",
        marginBottom: 15
    },
    titles: {
        color: colors.titleColor,
        fontSize: 20,
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
        width: "45%",
        alignContent: "center",
        alignSelf: "center",
        elevation: 10,
    },
})
