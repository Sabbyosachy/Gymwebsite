import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import InitializeAuthetication from "../Firebase/Initialize";
const { useState, useEffect } = require("react")

InitializeAuthetication();
const auth = getAuth();


const useFirebase=()=>{
const[user,setUser]=useState({});
const GoogleProvider= new GoogleAuthProvider();

   const SignInUsingGoogle=()=>{
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
        console.log(result.user);
      })
   }

   const logOut=()=>{
    signOut(auth).then(() => {
        setUser({});
      })
   }
//Observe auth state
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
      
   },[])

   return {
       user,
       logOut,
       SignInUsingGoogle
   }
  
}
export default useFirebase;
