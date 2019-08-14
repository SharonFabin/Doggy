import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, ImageBackground, TextInput} from 'react-native';
import Button from '../components/Button';
//import Input from '../components/Input';
import Title from '../components/Title';
import NiceButton from "../components/NiceButton";
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {loginUser, checkAuth} from '../actions';
import firebase from "firebase";
import {firebaseConfig} from '../settings';
import {WaveIndicator, MaterialIndicator,} from 'react-native-indicators';
import {fonts, colors, sizes} from '../constants/theme';

class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.checkAuth();
    }

    render() {
        let pic = require('../assets/jackk.jpg');
        return (
            <ImageBackground
                source={pic}
                style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <MaterialIndicator color='white' />
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {checkAuth}
)(Welcome);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
