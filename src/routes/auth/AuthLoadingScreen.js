import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {
  StatusBar,
  StyleSheet,
  View} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)

  }


  componentDidMount() {
  }

  componentDidUpdate (prevProps) {
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
