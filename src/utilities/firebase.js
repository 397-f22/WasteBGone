// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update, remove } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoC79Kv4Ez6qTJa40dyOP-8L9Hm0Rg-Bg",
    authDomain: "wastebgone-7da47.firebaseapp.com",
    databaseURL: "https://wastebgone-7da47-default-rtdb.firebaseio.com",
    projectId: "wastebgone-7da47",
    storageBucket: "wastebgone-7da47.appspot.com",
    messagingSenderId: "485354938392",
    appId: "1:485354938392:web:fb6136ca299bdfcebbe36d",
    measurementId: "G-B41VGFRDKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };

  export const deleteDbData = (path) =>{
    const taskRef = ref(database, path);
    remove(taskRef)
  }