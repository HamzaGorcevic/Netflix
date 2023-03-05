import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth, db } from "./firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const ContextProvide = createContext();
export { ContextProvide };

export default function Provide(props) {
  const [user, setUser] = useState("");
  const [test, setTest] = useState("Test");

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <ContextProvide.Provider
      value={{
        user,
        signUp,
        logIn,
        signOut,
        logOut,
      }}
    >
      {props.children}
    </ContextProvide.Provider>
  );
}
