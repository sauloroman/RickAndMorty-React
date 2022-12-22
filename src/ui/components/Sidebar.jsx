import styled from "@emotion/styled"
import { Navbar } from "./";
import logoWhite from '../../../public/img/logo-rickandmorty.png'
import logoBlack from '../../../public/img/logoBlack.svg'
import { useSelector } from "react-redux";
import { getCorrectLogo } from "../../rickandmorty/helpers";

const SideBarNavigation = styled.aside`
  position: relative;
  `;

const SideBarNavigationContainer = styled.div`
  transition: all .4s;
  background-color: var(--primary-color);
  width: 20%;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  border-right: 1px solid var(--border-color);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
`

const ImageLogo = styled.img`
  width: 22rem;
`

export const Sidebar = () => {

  const theme = useSelector( store => store.theme );
  const logo = getCorrectLogo( theme );

  return (
    <SideBarNavigation>
      <SideBarNavigationContainer>
        <ImageContainer>
          <ImageLogo src={ logo === 'white' ? logoWhite : logoBlack } alt="Icon Rick and Morty" />
        </ImageContainer>

        <Navbar />
      </SideBarNavigationContainer>
    </SideBarNavigation>
  )
}
 