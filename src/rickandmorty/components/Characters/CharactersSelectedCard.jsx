import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CategoryIcon from "@mui/icons-material/Category";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ComponentButton, ComponentPageTitle } from "../Common";
import { addFavorite, deleteFavorite } from "../../../store/slices/favorites.slice";
import { IsInFavorites, toggleSelectedCharacter } from "../../helpers";

const CharactersSelectedCardContainer = styled.div`
  padding: 5rem;
  border-left: 1px solid var(--border-color);
  height: 100%;
  position: fixed;
  width: 25%;
  left: 75%;
  background-color: var(--bg-card);
  transition: all .4s;

  @media ( max-width: 900px ) {
    left: 100%;
  }
`;

const CharactersSelectedHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
      font-size: 4rem;
      cursor: pointer;
      color: var(--button-color);
  }
`;

const CharactersSelectedCardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(50, 52, 94, 0.5);
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;

`;

const CharactersSelectedCardImage = styled.img`
  border-radius: 15px;
  width: 100%;
  @media ( max-width: 900px ) {
    width: 100%;
  }
`;

const CharactersSelectedCardTitle = styled.h3`
  text-align: center;
  color: var(--title-color);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const CharactersSelectedCardInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  font-size: 1.6rem;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

const CharactersSelectedCardItem = styled.li`
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

export const CharactersSelectedCard = () => {

  const dispatch = useDispatch();
  const favorites = useSelector( store => store.favorites );
  const selectedCharacter = useSelector((store) => store.selectedCharacter);

  const { name, image, id, status, species, type, origin, location, episode } =
    selectedCharacter;

  const finalStatus =
    status == "Alive" ? "alive" : status === "Dead" ? "dead" : "unknown";

  const onToggleFavorite = () => {
    const exists = IsInFavorites( favorites, selectedCharacter.id );
    dispatch( exists ? deleteFavorite( selectedCharacter.id ) : addFavorite( selectedCharacter ) );
  };

  return (
    <CharactersSelectedCardContainer className="animate__animated animate__fadeInRight selectedCharacterContainer">

      <CharactersSelectedHeader>
        <ComponentPageTitle>{name}</ComponentPageTitle>
        <i onClick={ toggleSelectedCharacter } className='bx bx-x'></i>
      </CharactersSelectedHeader>

      <CharactersSelectedCardImageContainer>
        <CharactersSelectedCardImage src={image} />
      </CharactersSelectedCardImageContainer>

      <CharactersSelectedCardInfo>
        <CharactersSelectedCardTitle>
          Character Information
        </CharactersSelectedCardTitle>

        <CharactersSelectedCardItem>
          <Grid3x3Icon /> Id: <span>{id}</span>
        </CharactersSelectedCardItem>

        <CharactersSelectedCardItem>
          <FavoriteIcon /> Status:{" "}
          <span className={`${finalStatus}`}>{status}</span>
        </CharactersSelectedCardItem>

        <CharactersSelectedCardItem>
          <AccessibilityIcon /> Species: <span>{species}</span>
        </CharactersSelectedCardItem>

        <CharactersSelectedCardItem>
          <CategoryIcon /> Type: <span>{type?.length ? type : "Unknown"}</span>
        </CharactersSelectedCardItem>

        <CharactersSelectedCardItem>
          <PublicIcon /> Origin: <span>{origin?.name}</span>
        </CharactersSelectedCardItem>

        <CharactersSelectedCardItem>
          <LocationCityIcon /> Location: <span>{location?.name}</span>
        </CharactersSelectedCardItem>

        <CharactersSelectedCardItem>
          <PlayArrowIcon /> {episode?.length} Episodes
        </CharactersSelectedCardItem>
      </CharactersSelectedCardInfo>

      <ComponentButton
        onClick={onToggleFavorite}
        style={{
          gridColumn: "2 / 3",
          backgroundColor: IsInFavorites( favorites, selectedCharacter.id )
            ? 'var(--button-favorite-color)'
            : 'var(--button-color)',
        }}
      >
        {IsInFavorites( favorites, selectedCharacter.id )
          ? "This is Favorite"
          : "Add to favorites"}
      </ComponentButton>
    </CharactersSelectedCardContainer>
  );
};
