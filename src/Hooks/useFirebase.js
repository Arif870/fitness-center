import { useEffect, useState } from "react";
import Firebaseinit from "../Firebase/Firebaseinit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useHistory } from "react-router";

Firebaseinit();

export default function useFirebase() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
    // .then(result => {
    //   setUser(result.user);
    //   setError("");
    //
    // .finally(() => setIsLoading(false))
    // .catch(error => {
    //   setError(error.message);
    //   // ...
    // });
  };

  const handleRegister = e => {
    e.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        userProfile();
        setError("");
        // ...
      })
      .finally(() => setIsLoading(false))
      .catch(error => {
        setError(error.message);
        // ..
      });
  };

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        setError("Successfully LogIn .. go to home");
        // ...
      })
      .finally(() => setIsLoading(false))
      .catch(error => {
        setError(error.message);
      });
  };

  const userProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
      })
      .catch(error => {
        setError(error.message);
        // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  const userLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser([]);

        // Sign-out successful.
      })
      .finally(() => setIsLoading(false))
      .catch(error => {
        setError(error.message);
        // An error happened.
      });
  };

  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handlePhoneNumber = e => {
    setPhone(e.target.value);
  };

  return {
    user,
    name,
    email,
    password,
    phone,
    error,
    isLoading,
    setIsLoading,
    setError,
    handleGoogleSignIn,
    handleRegister,
    handleLogin,
    userLogOut,
    handleName,
    handleEmail,
    handlePassword,
    handlePhoneNumber,
  };
}
