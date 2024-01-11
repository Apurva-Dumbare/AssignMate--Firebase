import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXRrOD_nWY4op52_bsyu28wbQS36mDedk",
  authDomain: "assignmate-df72e.firebaseapp.com",
  databaseURL: "https://assignmate-df72e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "assignmate-df72e",
  storageBucket: "assignmate-df72e.appspot.com",
  messagingSenderId: "660056468922",
  appId: "1:660056468922:web:346c48b24b375087b54183",
  measurementId: "G-9F5HX9BMG3"
  // apiKey: "AIzaSyDZMU1ZB3yXEyhiiwbOLVO150w6d8MfNNU",
  // authDomain: "fireabase-auth-1ae6a.firebaseapp.com",
  // databaseURL: "https://fireabase-auth-1ae6a-default-rtdb.firebaseio.com",
  // projectId: "fireabase-auth-1ae6a",
  // storageBucket: "fireabase-auth-1ae6a.appspot.com",
  // messagingSenderId: "575652549274",
  // appId: "1:575652549274:web:ee6c27ad58d60fb1240523",
  // measurementId: "G-FF3MG13K68"

};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getDatabase(app);
