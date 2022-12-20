import { NavLink } from "react-router-dom";
import styled from "@emotion/styled"
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';

const NavContainer = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`

const NavItem = styled.li`
  color: #CACAE2;
  display: flex;
  align-items: center;
  padding: 3rem 5rem;
  gap: 2rem;
  transition: all .3ms;

  svg {
    font-size: 3rem;
  }

  a {
    color: #CACAE2;
    font-size: 1.8rem;
    font-weight: 700;
  } 

  &:hover { 
    color: #fff;
  }
`;

export const Navbar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <SupervisedUserCircleIcon />
          <NavLink to='/' >Characters</NavLink>
        </NavItem>

        <NavItem>
          <LocationOnIcon />
          <NavLink to='/location' >Location</NavLink>
        </NavItem>

        <NavItem>
          <MovieIcon />
          <NavLink to='/episode' >Episode</NavLink>
        </NavItem>

        <NavItem>
          <FavoriteIcon />
          <NavLink to='/favorites' >Favorites</NavLink>
        </NavItem>
      </NavList>

      <NavItem>
        <LogoutIcon />
        <NavLink to='/settings' >Logout</NavLink>
      </NavItem>
    </NavContainer>
  )
}
