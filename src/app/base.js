import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from 'app/config';

const firebaseInstance = firebase.initializeApp(config.firebase);

export const auth = firebaseInstance.auth();

export default firebaseInstance;
