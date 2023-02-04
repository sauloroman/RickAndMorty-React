import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FireBaseAuth } from "../../firebase/config";
import { login, logout } from "../../store/slices/auth";

export const useAuthentication = () => {

  const { status } = useSelector( store => store.auth );
  const dispatch = useDispatch();

  useEffect( () => {

    onAuthStateChanged( FireBaseAuth, async( user ) => {

      if ( !user ) return dispatch( logout() );

      const { uid, email, displayName, photoURL } = user;

      dispatch( login({ uid, email, displayName, photoURL }));

    });

  }, []);

  return status;

}
