import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDw-RH9GxLa2Syhv4w5ghJcw5QefHR4QKo',
            authDomain: 'auth-c962b.firebaseapp.com',
            databaseURL: 'https://auth-c962b.firebaseio.com',
            projectId: 'auth-c962b',
            storageBucket: 'auth-c962b.appspot.com',
            messagingSenderId: '572766783286',
            appId: '1:572766783286:web:225ea3dd6a01b526'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner />
                        </CardSection>
                    </Card>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
