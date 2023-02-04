
export const getCorrectErrorMessage = ( errorMessage ) => {

  let errorToShow;

  switch( errorMessage ) {
    
    case 'Firebase: Error (auth/wrong-password).':
      errorToShow = 'El password no es correcto'
    break;

    case 'Firebase: Error (auth/user-not-found).':
      errorToShow = 'El usuario no existe';
    break;

    case 'Firebase: Error (auth/email-already-in-use).':
      errorToShow = 'Ya existe un usuario con este email';
    break;

    case 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).':
      errorToShow = 'Demasiados intentos. La cuenta ha sido temporalmente desabilitada.'
    break;

    case 'Firebase: Error (auth/invalid-email).':
      errorToShow = 'Email invalido';
    break;

    default: 
      errorToShow = errorMessage;
    break;

  }

  return errorToShow;

}
