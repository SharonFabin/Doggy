import React, {Component} from 'react';
import ReactNative from 'react-native';
import firebase from 'firebase';
import {firebaseConfig} from './app/settings'
import Main from './app/Main';



export default class App extends Component {
    componentDidMount() {
        ReactNative.I18nManager.allowRTL(false);
    }

    render() {
        return <Main/>;
    }
}
