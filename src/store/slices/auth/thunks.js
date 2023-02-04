import { loginWithEmailAndPassword, loginWithGoogle, registerUserWithEmailAndPassword } from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "./"

export const startSignInWithGoogle = () => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() );

    const {ok, uid, displayName, photoURL, email, errorMessage} = await loginWithGoogle();

    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ uid, displayName, photoURL, email }) );
  }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {

  return async( dispatch ) => {

    dispatch( checkingCredentials() );

    const { uid, ok, photoURL, errorMessage } = await registerUserWithEmailAndPassword({ email, password, displayName });

    if ( !ok ) return dispatch( logout({ errorMessage }) )

    dispatch( login({ uid, photoURL, displayName, email }) );

  }

}

export const startSignInWithEmailAndPassword = ({ email, password }) => {

  return async( dispatch ) => {

    dispatch( checkingCredentials() );

    const { uid, photoURL, displayName, errorMessage, ok } = await loginWithEmailAndPassword({ email, password });

    if ( !ok ) return dispatch( logout({errorMessage}) );

    dispatch( login({ uid, photoURL, displayName, email }) );

  }

}