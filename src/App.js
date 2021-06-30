import './App.css';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './index.js';
import { useAuthState } from 'react-firebase-hooks/auth';


import Loader from './components/Loader';
import Header from './components/Header';
import AppRouter from './components/AppRouter';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
   return <Loader />
  }



  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
