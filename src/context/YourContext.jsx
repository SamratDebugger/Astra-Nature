import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const ContextProvider = createContext();

export default function YourContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        setCurrentUser(user);

        // ...
      } else {
        // User is signed out
        // ...
        setCurrentUser(null);
      }
    });
    return () => observer();
  }, []);

  const data = {
    currentUser,
  };

  return <ContextProvider value={data}>{children}</ContextProvider>;
}
