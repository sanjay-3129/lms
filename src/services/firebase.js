// import { initializeApp } from 'firebase/app';
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from 'firebase/auth';
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   getDocs,
//   collection,
//   updateDoc,
//   setDoc,
//   addDoc,
// } from 'firebase/firestore';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyAeQwuVzgAiuDjgs_0cN6A9INXTxSvQ4A0',
//   authDomain: 'lms-dev-a3f1d.firebaseapp.com',
//   projectId: 'lms-dev-a3f1d',
//   storageBucket: 'lms-dev-a3f1d.appspot.com',
//   messagingSenderId: '256523968407',
//   appId: '1:256523968407:web:0415c87c533f401b0d2ed2',
//   measurementId: 'G-D1BEQ227TC',
// };

// // const firebaseConfig = {
// //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// //   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// // };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(firebaseApp);
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// export default firebaseApp;
// export {
//   auth,
//   db,
//   storage,
//   ref,
//   getDoc,
//   getDocs,
//   uploadBytes,
//   getDownloadURL,
//   doc,
//   collection,
//   updateDoc,
//   setDoc,
//   addDoc,
// };
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { enableIndexedDbPersistence } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAeQwuVzgAiuDjgs_0cN6A9INXTxSvQ4A0",
  authDomain: "lms-dev-a3f1d.firebaseapp.com",
  projectId: "lms-dev-a3f1d",
  storageBucket: "lms-dev-a3f1d.appspot.com",
  messagingSenderId: "256523968407",
  appId: "1:256523968407:web:0415c87c533f401b0d2ed2",
  measurementId: "G-D1BEQ227TC",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);
const storage = getStorage(app);
// offline support

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code === "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});
// Subsequent queries will use persistence, if it was enabled successfully

export {
  analytics,
  messaging,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  db,
  auth,
  getDoc,
  getDocs,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  collection,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
};
