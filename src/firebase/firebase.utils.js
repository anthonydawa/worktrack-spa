import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKN2Hmum5QAjb8a-eh9d3QkE4fiC1L7zI",
  authDomain: "worktrack-ad462.firebaseapp.com",
  projectId: "worktrack-ad462",
  storageBucket: "worktrack-ad462.appspot.com",
  messagingSenderId: "887796007441",
  appId: "1:887796007441:web:8e404de8cae3ab1b44a7b0",
  measurementId: "G-ZH4W6XQCEP",
};
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const bookings = [];
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        bookings,
        ...additionalData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
