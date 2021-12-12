import NewActionTypes from "./new.types";

import {
  firestore,
  convertNewCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: NewActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (newcollectionsMap) => ({
  type: NewActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: newcollectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: NewActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const newcollectionRef = firestore.collection("newcollections");
    dispatch(fetchCollectionsStart());
    newcollectionRef
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        const newcollectionsMap = convertNewCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(newcollectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
