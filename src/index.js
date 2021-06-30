import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase';
import { useContext } from 'react';

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCbXeH9Eb1h2LTi9F4uj5Lez24OC7sBAmk',
  authDomain: 'react-chat-257d9.firebaseapp.com',
  projectId: 'react-chat-257d9',
  storageBucket: 'react-chat-257d9.appspot.com',
  messagingSenderId: '954849756775',
  appId: '1:954849756775:web:33b4e00edd386c0dce36c2',
  measurementId: 'G-Z1YSM5VJHC',
});

export const Context = React.createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
