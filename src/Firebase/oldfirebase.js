// import { useEffect, useState } from "react";
// import Firebaseinit from "../Firebase/Firebaseinit";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// import { Swal } from "sweetalert2";
// import { useHistory } from "react-router";

// Firebaseinit();

// export default function useFirebase() {
//   const auth = getAuth();
//   const history = useHistory();
//   const googleprovider = new GoogleAuthProvider();

//   const [user, setUser] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     onAuthStateChanged(auth, user => {
//       if (user) {
//         setUser(user);
//       }
//     });
//   }, []);

//   const createUser = e => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth)
//       .then(result => {
//         setUser(result.user);
//       })
//       .then(() => {
//         Swal("Good job!", "Account Created successfull", "success");
//         history.push("/login");
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//   };

//   const googleSignin = () => {
//     signInWithPopup(auth, googleprovider)
//       .then(result => {
//         setUser(result.user);
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//   };

//   const signOutbtn = () => {
//     signOut(auth)
//       .then(() => {
//         setUser({});
//       })
//       .catch(error => {
//         setError(error);
//       });
//   };

//   return { user, error, createUser, googleSignin, signOutbtn };
// }
