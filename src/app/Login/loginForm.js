import React, { Component } from 'react';
import styles from './loginformStyle';
import {
    View,
    Text,
    AsyncStorage,
    ActivityIndicator,
    Button,
    ToastAndroid,
    TextInput,
    Picker
} from 'react-native';


export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            pickerSelection: 'Select',
            username: '',
            password: '',
            token: 'hhjhbhvbhhxghghjcgxhbhjgxxcjdfgfGFGFGFhghjxg',
            currencies: [{ "country": "UK", "currency": "GBP", "currencyLabel": "Chancler" },
            { "country": "EU", "currency": "EUR", "currencyLabel": "ProChancler" }]
        }
    }

    setToken = async () => {
        try {
            const { username, password, token } = this.state;

            let myArray = {
                userId: username,
                pass: password,
                token: token
            }
            await AsyncStorage.setItem('Token', JSON.stringify(myArray));
            ToastAndroid.show("data saved", ToastAndroid.LONG);
        } catch (error) {
            // Error saving data
            ToastAndroid.show("error in data saved" + error, ToastAndroid.LONG);
        }
    };

    getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('Token');
            if (value !== null) {
                // We have data!!
                console.log(value);
                let myvalue = JSON.parse(value);
              //  ToastAndroid.show("Retrived Data is:" + JSON.stringify(myvalue), ToastAndroid.LONG);
            }
        } catch (error) {
            ToastAndroid.show("error in data retrived" + error, ToastAndroid.LONG);
            // Error retrieving data
        }
    };

    login() {
        let myToken = this.get
    }

    getData() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                });
                //alert("data of Inputs"+dataSource);
                ToastAndroid.show(JSON.stringify(responseJson), ToastAndroid.LONG);
                //ToastAndroid.show('responseJson Movies',responseJson.movies);
            })
            .catch((error) => {
                ToastAndroid.show('Response Error', error);
            });
    }

    postData() {
        return fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <View style={{ flex: 2, padding: 40 }}>
        //             <ActivityIndicator />
        //         </View>
        //     )
        // }
        return (

            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                <TextInput
                    placeholder="UserID"
                    placeholderTextColor="rgb(119, 122, 126)"
                    returnKeyType="next"
                    onChangeText={(value) => this.setState({ username: value })}
                    value={this.state.username}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />

                <Picker
                    mode="dialog"
                    selectedValue={this.state.pickerSelection}
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) => this.setState({ pickerSelection: itemValue })}>{
                        this.state.currencies.map((v) => {
                            return <Picker.Item label={v.currencyLabel} value={v.currency} />
                        })}
                </Picker>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgb(119, 122, 126)"
                    returnKeyType="go"
                    secureTextEntry
                    onChangeText={(value) => this.setState({ password: value })}
                    value={this.state.password}
                    style={styles.input}
                    ref={(input) => this.passwordInput = input} />

                {/* <View style={styles.btnContainer}>
                    <Button style={styles.btn}
                        onPress={() => {
                            // alert(" You clicked on Button")
                            if (this.state.username.localeCompare('Vishal') != 0) {
                                ToastAndroid.show('Invalid UserName', ToastAndroid.SHORT);
                                return;
                            }
                            if (this.state.password.localeCompare('123') != 0) {
                                ToastAndroid.show('Invalid Password', ToastAndroid.SHORT);
                                return;
                            }
                            this.setToken;
                            // this.getData();
                            //this.saveData();
                            //this.props.navigation.navigate('DashBoard');
                        }}
                        title="Login"
                        color="#40c8d4">
                    </Button>
                </View> */}
                <View style={styles.container}>
                    <Button style={styles.btn}
                        onPress={this.setToken}
                        title="Save Data"
                        color="#40c8d4">
                    </Button>
                </View>
                <View style={styles.container}>
                    <Button style={styles.btn}
                        onPress={this.getToken}
                        title="Show Data"
                        color="#40c8d4">
                    </Button>
                </View>

            </View>
        );
    }
}