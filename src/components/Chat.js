import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index.js';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './Loader.js';
import firebase from 'firebase';

const Chat = () => {
  const { auth, firestore } = React.useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = React.useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue('');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='container'>
      <div className='chat'>
        <div className='message-chat'>
          {messages.map((message) => (
            <div className='message-box'>
              <div className='top-mess'>
                <img className='mes-img' src={message.photoURL} alt='' />
                <h5>{message.displayName}</h5>
              </div>
              <div className='message-text'>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='control-chat'>
          <input
            className='chat-input'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='control-chat-btn' onClick={sendMessage}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
