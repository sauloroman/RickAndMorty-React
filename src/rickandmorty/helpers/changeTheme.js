export const changeTheme = ( theme ) => {
  document.body.className = '';
  document.body.classList.add(`${theme}-mode`);
}
