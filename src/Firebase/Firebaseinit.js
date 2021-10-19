import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

export default function Firebaseinit() {
  return initializeApp(firebaseConfig);
}
