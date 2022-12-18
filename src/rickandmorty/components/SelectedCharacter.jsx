import { useSelector } from "react-redux"
import styled from "@emotion/styled"
import { PageTitle } from "../../RickAndMortyApp"

import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CategoryIcon from '@mui/icons-material/Category';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const SelectedCharacterContainer = styled.div`
  padding: 5rem;
  border-left: 1px solid #DDD;
  height: 100%;
  width: 25%;
  left: 75%;
  background-color: #fff;
  position: fixed;
  `

const SelectedCharacterImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(50, 52, 94, 0.5);
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
`

const SelectedCharacterImage = styled.img`
  border-radius: 15px;
  width: 100%;
`;

const SelectedCharacterTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`

const SelectedCharacterInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  font-size: 1.6rem;
  padding: 0 2rem;
  margin-bottom: 3rem;
`

const SelectedCharacterItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;

  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }

  span {
    margin-left: 1.2rem;
    font-weight: 400;
  }

`;

const SelectedCharacterButton = styled.button`
  background-color: #1864ab;
  border-radius: 5px;
  padding: 1.5rem;
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 50%;
  width: 50%;
  transition: all .3s;

  &:hover {
    background-color: #228be6;
  }
`;

export const SelectedCharacter = () => {

  const selectedCharacter = useSelector( store => store.selectedCharacter );

  const { name, image, id, status, species, type, origin, location, episode } = selectedCharacter;

  const finalStatus =  status == 'Alive' 
                      ? 'alive' 
                      : status === 'Dead' ? 'dead' : 'unknown'

  return (
    <SelectedCharacterContainer className="animate__animated animate__fadeInRight">

        <PageTitle>{name}</PageTitle>

        <SelectedCharacterImageContainer>
          <SelectedCharacterImage src={ image }/>
        </SelectedCharacterImageContainer>

        <SelectedCharacterTitle>
          Character Information
        </SelectedCharacterTitle>

        <SelectedCharacterInfo>
          <SelectedCharacterItem>
            <Grid3x3Icon /> Id: <span>{ id }</span>
          </SelectedCharacterItem>

          <SelectedCharacterItem>
          <FavoriteIcon /> Status: <span className={`${finalStatus}`}>{ status }</span>
          </SelectedCharacterItem>

          <SelectedCharacterItem>
            <AccessibilityIcon /> Species: <span>{ species }</span>
          </SelectedCharacterItem>

          <SelectedCharacterItem>
            <CategoryIcon /> Type: <span>{ type?.length ? type : 'Unknown' }</span>
          </SelectedCharacterItem>

          <SelectedCharacterItem>
            <PublicIcon /> Origin: <span>{ origin?.name }</span>
          </SelectedCharacterItem>

          <SelectedCharacterItem>
            <LocationCityIcon /> Location: <span>{ location?.name }</span>
          </SelectedCharacterItem>

          <SelectedCharacterItem>
            <PlayArrowIcon /> { episode?.length } Episodes
          </SelectedCharacterItem>
        </SelectedCharacterInfo>

      <SelectedCharacterButton>
        Add to Favourites
      </SelectedCharacterButton>

    </SelectedCharacterContainer>
  )
}
