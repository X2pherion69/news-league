import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyBuP_BZ1qjaNh0ZlFebQTBf1ZOl-Pzqfu4",
  authDomain: "news-league-db.firebaseapp.com",
  databaseURL:
    "https://news-league-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "news-league-db",
  storageBucket: "news-league-db.appspot.com",
  messagingSenderId: "73651815854",
  appId: "1:73651815854:web:38988cda6af0423a9cf43f",
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(obj.title);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const addNewCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const newcollectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = newcollectionRef.doc(obj.title);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const convertNewCollectionsSnapshotToMap = (newcollections) => {
  const transformedNewCollection = newcollections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedNewCollection.reduce((accumulator, newcollection) => {
    accumulator[newcollection.title.toLowerCase()] = newcollection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
