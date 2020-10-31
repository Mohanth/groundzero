import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCoIcDzURhBG6VH37Xvh_bWmegftD3r06Q",
    authDomain: "groundzerolearning.firebaseapp.com",
    databaseURL: "https://groundzerolearning.firebaseio.com",
    projectId: "groundzerolearning",
    storageBucket: "groundzerolearning.appspot.com",
    messagingSenderId: "23501768243",
    appId: "1:23501768243:web:fca8e5b27cfd294300c546",
    measurementId: "G-TWSXW1W8E4"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fireDb.database().ref();

