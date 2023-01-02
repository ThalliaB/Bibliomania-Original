import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBIBC7BgLJbEGkQR7kXAHdJEUMG6JObagY",
    authDomain: "teste2-d58e6.firebaseapp.com",
    projectId: "teste2-d58e6"
  }); 

  export const database = getFirestore(firebaseApp);