import React from 'react';
import { Login as LoginComponent } from '../components/index';

function Login() {
  return (
    <div className='py-8 bg-gray-900 min-h-screen flex items-center justify-center'>
        <LoginComponent />
    </div>
  );
}

export default Login;