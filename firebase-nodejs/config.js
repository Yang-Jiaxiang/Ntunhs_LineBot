const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAfHn3BkTjWaWv3GKz4ujsaUi2xibx50oo",
  authDomain: "ntunhsbank.firebaseapp.com",
  projectId: "ntunhsbank",
  storageBucket: "ntunhsbank.appspot.com",
  messagingSenderId: "188269713397",
  appId: "1:188269713397:web:175c95bd1372d68c4bf2bc",
  measurementId: "G-KFBQPEV7D1"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
