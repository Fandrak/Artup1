import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

// import config from "./config.json";
const config = {};

export const FirebaseContext = React.createContext();

export default FirebaseContext;
// Initialize Firebase
export class Firebase {
  // constructor() {
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(config);
  //     this.auth = firebase.auth();
  //   } else {
  //     firebase.app();
  //     this.auth = firebase.auth();
  //   }
  // }
}
