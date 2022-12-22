export const getCorrectLogo = ( theme ) => {

  if ( theme === 'yellow' || theme === 'white' ) {
    return 'black'
  } else {
    return 'white';
  }

}