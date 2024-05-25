import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

const App = () => {
  return (
    <UserContextProvider>
      <h1 className='text-center bg-slate-500 p-4 m-2 text-white'>Hello React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
