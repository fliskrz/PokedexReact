import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './components/App';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDw3TSMtnQ9zQ18F_CSRZLE17nID2j4-Dg",
    authDomain: "pokedex-81d62.firebaseapp.com",
    databaseURL: "https://pokedex-81d62.firebaseio.com",
    projectId: "pokedex-81d62",
    storageBucket: "pokedex-81d62.appspot.com",
    messagingSenderId: "729385908962"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

