import React from "react";
import firebase from "../../firebase/firebase.utils";
export const InputButton = ({ collection }) => {
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("collections").doc(collection.id).delete();
  };
  return <button onClick={onDelete}>Delete</button>;
};
