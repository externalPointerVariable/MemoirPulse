import React from 'react';
import {login as loginComponent} from '../components/index';
function Login() {
  return (
    <div className='py-8 bg-gray-900 min-h-screen'>
      <loginComponent />
    </div>
  );
}

export default Login;