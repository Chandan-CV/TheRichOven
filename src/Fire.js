import firebase from "firebase";
const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBuSqIepI7q2bDeUMa1XYJT3eKzjfVhZeI",
    authDomain: "the-rich-oven.firebaseapp.com",
    projectId: "the-rich-oven",
    storageBucket: "the-rich-oven.appspot.com",
    messagingSenderId: "435664897520",
    appId: "1:435664897520:web:ac7ba68fb32d622619c935",
    measurementId: "G-DFKDL2NVTR",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

if (firebase.apps.length == 0) {
  init();
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();





const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = (history) => {
  auth.signInWithPopup(googleProvider).then((user) => {
    db.collection("Users")
      .doc(user.user.uid)
      .get()
      .then((snap) => {
        if (!snap.exists) {
          db.collection("Users").doc(user.user.uid).set({
            email: user.user.email,
            name: user.user.displayName,
            address: null,
            role: "user",
            timeOfCreation: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
        history.push("/");
      });
  });
};



export { db, auth, storage, signInWithGoogle, init, firebase };
