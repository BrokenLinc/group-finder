import Rebase from 're-base';
import firebase from 'firebase';

import config from 'app/config';

const app = firebase.initializeApp(config.firebase);

export const auth = app.auth();
export const base = Rebase.createClass(app.database());
