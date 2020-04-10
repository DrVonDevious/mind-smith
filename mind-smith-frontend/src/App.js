import React from 'react';
import Login from './components/LoginForm'
import Register from './components/Register'
import DynamicContainer from './components/DynamicContainer'


function App() {

  return (
    <div >
      <DynamicContainer />
      <Login />
      <Register />
    </div>
  );
}

export default App;
