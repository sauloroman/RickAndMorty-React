import styled from "@emotion/styled";
import rickFace from '../../../public/img/face.png';
import { toggleMenu } from "../../rickandmorty/helpers";

const MenuButtonContainer = styled.button`
  background-color: var(--button-color);
  position: fixed;
  bottom: 8%;
  left: 5%;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  box-shadow: 0 3px 3px var(--button-color-2);
  transition: all .4s;
  display: none;

  &:hover {
    transform: translateY(-5px);
  }

  @media ( max-width: 900px ) {
    display: unset;
  } 
`;

const MenuButtonImg = styled.img`
  width: 70%;
`;

export const MenuButton = () => {
  return (
    <MenuButtonContainer onClick={ () => toggleMenu() }>
      <MenuButtonImg src={rickFace} alt="Rick Face" />
    </MenuButtonContainer>
  )
}
