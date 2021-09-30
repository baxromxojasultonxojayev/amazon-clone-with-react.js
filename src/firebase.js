import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAETrypTqIZW0JGYos-TvOYmrceNyumFCQ",

  authDomain: "clone-ec34f.firebaseapp.com",

  projectId: "clone-ec34f",

  storageBucket: "clone-ec34f.appspot.com",

  messagingSenderId: "544497513583",

  appId: "1:544497513583:web:ed5967f9cda6f8806ac99a",

  measurementId: "G-F7VLG1L3LD"

})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}