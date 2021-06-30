import React from 'react';
import { NavLink } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index.js';

const Header = () => {
  const { auth } = React.useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className='header'>
      {user ? (
        <img src={user.photoURL} className='user-img' alt='' />
      ) : (
        <img
          className='user-img'
          src='https://image.flaticon.com/icons/png/512/149/149071.png'
          alt=''
        />
      )}
      {user ? (
        <NavLink to={CHAT_ROUTE}>
          <button onClick={() => auth.signOut()} className='header__login'>
            Выйти
          </button>
        </NavLink>
      ) : (
        <NavLink to={LOGIN_ROUTE}>
          <button className='header__login'>Войти</button>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
