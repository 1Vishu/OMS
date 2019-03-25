import React, { Component } from 'react';
import {View,Image, ScrollView, AsyncStorage, WebView, ToastAndroid,StatusBar} from 'react-native';

import styles from './Style';
import LoginForm from './loginForm';

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
            loading: true,
            Token: true
        }
        this.getToken();
    }
    getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('Token');
            if (value !== null) {
                // We have data!!
                let myvalue = JSON.parse(value);
                this.state.Token = "ghhghjgasdaddfabxbhdhgdhdhjdkkbnbnxxchhjjhggdj";
                ToastAndroid.show("token Value is:" + this.state.Token, ToastAndroid.LONG);
                ToastAndroid.show("Retrived Data is:" + JSON.stringify(myvalue.token), ToastAndroid.LONG);
            }
        } catch (error) {
            ToastAndroid.show("error in data retrived" + error, ToastAndroid.LONG);
            // Error retrieving data
        }
    };

    render() {
        ToastAndroid.show("Retrived Data is:" + this.state.Token, ToastAndroid.LONG);

        if (this.state.Token) {
            return (
                <View style={styles.container}>

                    <WebView
                        source={{ uri: 'https://github.com/facebook/react-native' }}
                        style={{ marginTop: 20 }}
                    />
                </View>
            );

        } else {

            return (<View style={styles.container}>
                <StatusBar
                    backgroundColor="#2980b9"
                    barStyle="light-content"
                />
                <ScrollView>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/logo.png')} />
                        <LoginForm></LoginForm>
                    </View>
                </ScrollView>

            </View>
            );

        }
    }
}
