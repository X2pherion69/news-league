import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBuP_BZ1qjaNh0ZlFebQTBf1ZOl-Pzqfu4",
  authDomain: "news-league-db.firebaseapp.com",
  projectId: "news-league-db",
  storageBucket: "news-league-db.appspot.com",
  messagingSenderId: "73651815854",
  appId: "1:73651815854:web:38988cda6af0423a9cf43f",
  measurementId: "G-9K746PXZ7M",
};

export const createtUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
