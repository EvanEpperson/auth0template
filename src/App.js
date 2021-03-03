import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react'

function App() {

  // this is for if its loading we get this because it will show the login button for a milisecond instead of the logout button after you login 
  const {isLoading} = useAuth0()

  if(isLoading) return <div>Loading...</div>


  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
