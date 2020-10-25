import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWKE16VuToU1XB2YvBVlMaJvgGV1XCNPo",
  authDomain: "instagram-clone-react-8fc68.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-8fc68.firebaseio.com",
  projectId: "instagram-clone-react-8fc68",
  storageBucket: "instagram-clone-react-8fc68.appspot.com",
  messagingSenderId: "776392760302",
  appId: "1:776392760302:web:c6e106660b2de0753c4cff",
  measurementId: "G-86VVH88CTH",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
