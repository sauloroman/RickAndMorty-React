import styled from "@emotion/styled"
import { Navbar } from "./";
import logoWhite from '../../../public/img/logo-rickandmorty.png'
import logoBlack from '../../../public/img/logoBlack.svg'

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
  return (
    <SideBarNavigation>
      <SideBarNavigationContainer>
        <ImageContainer>
          <ImageLogo src={ logoBlack } alt="Icon Rick and Morty" />
        </ImageContainer>

        <Navbar />
      </SideBarNavigationContainer>
    </SideBarNavigation>
  )
}
 