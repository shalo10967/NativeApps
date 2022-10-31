import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Image,
    ActivityIndicator
} from 'react-native';

import { colors } from '@styles';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: this.props.isLoading
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            isLoading: nextProps.isLoading
        };
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.state.isLoading}
                style={{ zIndex: 1100 }}
                onRequestClose={() => { }}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator animating={this.state.isLoading} 
                        color={colors.colorPrimary} 
                        size={50}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#rgba(0, 0, 0, 0.5)',
        zIndex: 1000
    },
    activityIndicatorWrapper: {
        backgroundColor: 'transparent',
        height: 500,
        width: 500,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default Loader