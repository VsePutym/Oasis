import {useEffect, useState} from "react";

const useAuth = (authFirebase) => {
  const [authentication, setAuthentication] = useState(null)

  const auth = authFirebase()
  const provider = new authFirebase.GoogleAuthProvider();
  const logIn = () => auth.signInWithPopup(provider);
  const logOut = () => auth.signOut()
    .then()
    .catch(err => console.error())

  useEffect(() => {
  auth.onAuthStateChanged(user => {
    if(user){
      setAuthentication(user)
    } else {
      setAuthentication(null)
    }
  })
  }, [authentication, auth]);

  return {authentication, logIn, logOut}
}

export default useAuth;