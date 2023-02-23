import styled from "@emotion/styled"
import { Navbar } from "./";
import logoWhite from '../../../public/img/logo-rickandmorty.png'
import logoBlack from '../../../public/img/logoBlack.svg'
import { useSelector } from "react-redux";
import { getCorrectLogo, toggleMenu } from "../../rickandmorty/helpers";

const SideBarNavigation = styled.aside`
  position: relative;
`;

const SideBarNavigationContainer = styled.div`
  transition: all .4s;
  background-color: var(--primary-color);
  width: 20%;
  height: 100%;
  max-height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  border-right: 1px solid var(--border-color);
  
  @media ( max-width: 900px ) {
    top:0;
    left:0;
    width: 60%;
    z-index: 9;
    transform: translateX(-200%);
    gap: 3rem;
    border: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
`

const ImageLogo = styled.img`
  width: 22rem;
`

const SideBarNavigationClose = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-end;

    i {
      font-size: 6rem;
      cursor: pointer;
      color: #fff;
    }
  }
`;

export const Sidebar = () => {

  const theme = useSelector( store => store.theme );
  const logo = getCorrectLogo( theme );

  return (
    <SideBarNavigation>
      <SideBarNavigationContainer className="menuContainer">

        <SideBarNavigationClose>
          <i onClick={ toggleMenu } className='bx bx-x'></i>
        </SideBarNavigationClose>

        <ImageContainer>
          <ImageLogo src={ logo === 'white' ? logoWhite : logoBlack } alt="Icon Rick and Morty" />
        </ImageContainer>

        <Navbar />
      </SideBarNavigationContainer>
    </SideBarNavigation>
  )
}
 