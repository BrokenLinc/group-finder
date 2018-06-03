import React from 'react';

import { auth } from 'app/base';
import SignInWithGoogle from 'auth/SignInWithGoogle';

const SignIn = () => (
  <div>
    <h1>Sign In</h1>
    <SignInWithGoogle className="btn is-outline" auth={auth} />
  </div>
);

export default SignIn;
