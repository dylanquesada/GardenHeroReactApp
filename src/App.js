import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./login/LoginForm";
import * as firebase from "firebase";
import {
  FIREBASEAPIKEY,
  AUTHDOMAIN,
  DATABASEURL,
  STORAGEBUCKET,
  PROJECTID,
  MESSAGINGSENDERID
} from "./src/components/APIKeysLocal";

class App extends Component {
  startFirebase() {
    var config = {
      apiKey: FIREBASEAPIKEY,
      authDomain: AUTHDOMAIN,
      databaseURL: DATABASEURL,
      projectId: PROJECTID,
      storageBucket: STORAGEBUCKET,
      messagingSenderId: MESSAGINGSENDERID
    };
    firebase.initializeApp(config);
    console.log("Firebase initialized.");
  }

  render() {
    this.startFirebase();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to the GardenHero back-end connection. Nothing over here.
          </h1>
        </header>
        <p className="App-intro">
          This site stays open to monitor the Firebase connection and relay
          Twilio notifications.
        </p>
        <LoginForm />
      </div>
    );
  }
}

export default App;
