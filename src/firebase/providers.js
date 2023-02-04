import { FireBaseAuth } from "./config";

import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup, 
  updateProfile} from "firebase/auth";
import { getCorrectErrorMessage } from "../auth/helpers/getCorrectErrorMessage";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async() => {

  try {

    const res = await signInWithPopup(FireBaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = res.user;
    
    return {
      ok: true,
      uid, displayName, email, photoURL
    }

  } catch ( error ) {
    console.log( error );
    const errorUser = getCorrectErrorMessage( error.message )
    return { ok: false, errorMessage: errorUser };
  }

}

export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {

  try {

    const res = await createUserWithEmailAndPassword( FireBaseAuth, email, password );
    const {uid, photoURL } = res.user;

    await updateProfile( FireBaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid, photoURL
    }

  } catch( error ) {
    console.log( error );
    const errorUser = getCorrectErrorMessage( error.message )
    return { ok: false, errorMessage: errorUser };
  }

}

export const loginWithEmailAndPassword = async ({ email, password }) => {

  try {

    const res = await signInWithEmailAndPassword( FireBaseAuth, email, password );
    const { uid, photoURL, displayName } = res.user;

    return {
      ok: true,
      uid, photoURL, displayName
    }

  } catch ( error ) {
    console.log( error );
    const errorUser = getCorrectErrorMessage( error.message )
    return { ok: false, errorMessage: errorUser };
  }

}
