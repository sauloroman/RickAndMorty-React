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
import { IsInFavorites } from "../../helpers";

const CharactersSelectedCardContainer = styled.div`
  padding: 5rem;
  border-left: 1px solid #ddd;
  height: 100%;
  width: 25%;
  left: 75%;
  background-color: #fff;
  position: fixed;
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
`;

const CharactersSelectedCardTitle = styled.h3`
  text-align: center;
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
    <CharactersSelectedCardContainer className="animate__animated animate__fadeInRight">
      <ComponentPageTitle>{name}</ComponentPageTitle>

      <CharactersSelectedCardImageContainer>
        <CharactersSelectedCardImage src={image} />
      </CharactersSelectedCardImageContainer>

      <CharactersSelectedCardTitle>
        Character Information
      </CharactersSelectedCardTitle>

      <CharactersSelectedCardInfo>
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
          backgroundColor: IsInFavorites( favorites, selectedCharacter.id )
            ? "#9c36b5"
            : "#1864ab",
        }}
      >
        {IsInFavorites( favorites, selectedCharacter.id )
          ? "This is Favorite"
          : "Add to favorites"}
      </ComponentButton>
    </CharactersSelectedCardContainer>
  );
};
