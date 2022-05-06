import React, { useEffect } from 'react';
import './App.css';
import Friends from './friends/Friends';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './login/Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        dispatch(logout());
        auth.signOut();
      }
    })
  }, [])

  return (
    <div className="app">
      {!user ?
        <Login />
        :
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Main />
            <Friends />
          </div>
        </>
      }
    </div>
  );
}

export default App;
