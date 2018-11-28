import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from './components/firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

componentWillMount() {
    // firebase.initializeApp({
    //     apiKey: 'AIzaSyCqxUqVyFe54IpiDakOjuwcuxAc0EYHdZw',
    //     authDomain: 'authentication-2e1d9.firebaseapp.com',
    //     databaseURL: 'https://authentication-2e1d9.firebaseio.com',
    //     projectId: 'authentication-2e1d9',
    //     storageBucket: 'authentication-2e1d9.appspot.com',
    //     messagingSenderId: '14660715585'
    //   });

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
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Avegan" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
