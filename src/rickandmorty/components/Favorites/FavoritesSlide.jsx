import styled from "@emotion/styled"

const FavoritesSlideContainer = styled.div`
  width: 90%;
  height: 40rem;
`;

const FavoritesSlideImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  
  &::after {
    border-radius: 15px;
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient( to right bottom, rgba(50, 52, 94, 0.3), rgba(50, 52, 94, 0.3))
  }
  `;

const FavoritesSlideImage = styled.img`
  width: 20%;
  border-radius: 15px;
`;

export const FavoritesSlide = ({ name, image }) => {
  return (
    <FavoritesSlideContainer>
      <FavoritesSlideImageContainer>
        <FavoritesSlideImage src={image} alt={name} />
      </FavoritesSlideImageContainer>
    </FavoritesSlideContainer>
  )
}
