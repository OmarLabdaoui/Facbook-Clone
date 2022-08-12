import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAJNw6Vj-9N4ScThpQemiGbbVGHjkXSwfc",
  authDomain: "testclone-51120.firebaseapp.com",
  projectId: "testclone-51120",
  storageBucket: "testclone-51120.appspot.com",
  messagingSenderId: "313485733236",
  appId: "1:313485733236:web:9d1df75013036070085021",
  measurementId: "G-MLSWBTEKX8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
