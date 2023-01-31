export const toggleSelectedCharacter = () => {
  const navigationContainer = document.querySelector('.selectedCharacterContainer');
  navigationContainer.classList.toggle('show-selected');
}
