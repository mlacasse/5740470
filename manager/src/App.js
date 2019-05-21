import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyBIsageOjNwcPmqueVFwFpsDu6G_zmfaWo',
            authDomain: 'manager-e3bf2.firebaseapp.com',
            databaseURL: 'https://manager-e3bf2.firebaseio.com',
            projectId: 'manager-e3bf2',
            storageBucket: 'manager-e3bf2.appspot.com',
            messagingSenderId: '42154787656',
            appId: '1:42154787656:web:8f3900d4a92be531'
        };

        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
