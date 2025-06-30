import React from 'react';
import { Signup as SignupComponent } from '../components/index';

function Signup() {
  return (
    <div className='py-8 bg-gray-900 min-h-screen flex items-center justify-center'>
        <SignupComponent />
    </div>
  );
}

export default Signup;