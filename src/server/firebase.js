import firebase from './firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDnQQO0xC0TkTXEGj3TCW_zAWnG_1irqvQ",
  authDomain: "slack-react-project-806ba.firebaseapp.com",
  projectId: "slack-react-project-806ba",
  storageBucket: "slack-react-project-806ba.appspot.com",
  messagingSenderId: "661336316570",
  appId: "1:661336316570:web:25ccd686d389f7e6ec5d23",
  measurementId: "G-031F7H05NG"
};

const app = initializeApp(firebaseConfig);
  // firebase.analytics();

  export default firebase;
// In firebase.js
export const auth = getAuth(app); // Assuming app is initialized (optional)
export const storage = getStorage(app); // Assuming app is initialized (optional)
export const database = getDatabase(); // Realtime Database





// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyDnQQO0xC0TkTXEGj3TCW_zAWnG_1irqvQ",
//   authDomain: "slack-react-project-806ba.firebaseapp.com",
//   projectId: "slack-react-project-806ba",
//   storageBucket: "slack-react-project-806ba.appspot.com",
//   messagingSenderId: "661336316570",
//   appId: "1:661336316570:web:25ccd686d389f7e6ec5d23",
//   // measurementId: "G-031F7H05NG" // Remove if not using Firebase Analytics
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Get individual Firebase services (optional):
// const auth = getAuth(app);
// const storage = getStorage(app);
// const database = getDatabase(app);

//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


// export default {
//   auth,
//   storage,
//   database,
//   // Optionally add other Firebase services here
// };
