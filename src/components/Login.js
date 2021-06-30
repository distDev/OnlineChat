import React from 'react';
import { useContext } from 'react';
import { Context } from '../index.js';
import firebase from 'firebase';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <div className='login-container'>
      <div className='login'>
        <h2 className='main-title'>
          Добро пожаловать на
          <br /> страницу входа
        </h2>

        <button onClick={login} className='google-btn'>
          Войти с помощью Google
        </button>
      </div>
    </div>
  );
};

export default Login;
