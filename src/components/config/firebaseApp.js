import firebaseApp from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvGj82aO5f7kVPfRbnj9Zn9L_n2UI1d68",
  authDomain: "reactdatabase-78fd8.firebaseapp.com",
  databaseURL: "https://reactdatabase-78fd8.firebaseio.com",
  projectId: "reactdatabase-78fd8",
  storageBucket: "reactdatabase-78fd8.appspot.com",
  messagingSenderId: "332484840661",
  appId: "1:332484840661:web:188d555b724987895ba65c",
  measurementId: "G-Z1XV0XDJJD",
};
// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);
firebaseApp.analytics();

export default firebaseApp;
