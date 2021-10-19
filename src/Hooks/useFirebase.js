import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import InitializeAuthetication from "../Firebase/Initialize";
const { useState, useEffect } = require("react")

InitializeAuthetication();
const auth = getAuth();


const useFirebase=()=>{
const[user,setUser]=useState({});
const[isLoading,setIsLoading]=useState(true);
const GoogleProvider= new GoogleAuthProvider();

   const SignInUsingGoogle=()=>{
      setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
        console.log(result.user);
      })
      .finally(()=> setIsLoading(false));
   }

   const logOut=()=>{
      setIsLoading(true);
    signOut(auth).then(() => {
        setUser({});
      })
      .finally(()=> setIsLoading(false));
   }
//Observe auth state
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
        setIsLoading(false);
      });
      
   },[])

   return {
       user,
       logOut,
       isLoading,
       SignInUsingGoogle
   }
  
}
export default useFirebase;
