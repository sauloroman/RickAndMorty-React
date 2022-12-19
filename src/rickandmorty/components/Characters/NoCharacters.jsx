import styled from "@emotion/styled"
import imageError from '../../../../public/img/404-image.png';

const NoCharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const NoCharactersImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoCharactersImage = styled.img`
  width: 30rem;
`;

const NoCharactersInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const NoCharactersNumber = styled.p`
  font-weight: 900;
  font-size: 8rem;
  letter-spacing: 20px;
  color: #6684CF;
  `;

const NoCharactersTitle = styled.h2`
  color: #6684CF;
  font-weight: 900;
  letter-spacing: 10px;
  font-size: 3rem;
  text-transform: uppercase;
`;

const NoCharactersDescription = styled.p`
  text-align: center;
  line-height: 1.7;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const NoCharacters = () => {
  return (
    <NoCharactersContainer className="animate__animated animate__fadeInUp">

      <NoCharactersImageContainer>
        <NoCharactersImage src={ imageError } alt='404 error image'/>
      </NoCharactersImageContainer>

      <NoCharactersInfo>
        <NoCharactersNumber>404</NoCharactersNumber>
        <NoCharactersTitle>No results found</NoCharactersTitle>
        <NoCharactersDescription>We couldn't find what you searched for. <br/>Try searching again</NoCharactersDescription>
      </NoCharactersInfo>

    </NoCharactersContainer>
  )
}
