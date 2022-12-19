import styled from "@emotion/styled"
import imageError from '../../../../public/img/404-image.png';

const CharactersErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const CharactersErrorImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharactersErrorImage = styled.img`
  width: 30rem;
`;

const CharactersErrorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const CharactersErrorNumber = styled.p`
  font-weight: 900;
  font-size: 8rem;
  letter-spacing: 20px;
  color: #6684CF;
  `;

const CharactersErrorTitle = styled.h2`
  color: #6684CF;
  font-weight: 900;
  letter-spacing: 10px;
  font-size: 3rem;
  text-transform: uppercase;
`;

const CharactersErrorDescription = styled.p`
  text-align: center;
  line-height: 1.7;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const CharactersError = () => {
  return (
    <CharactersErrorContainer className="animate__animated animate__fadeInUp">

      <CharactersErrorImageContainer>
        <CharactersErrorImage src={ imageError } alt='404 error image'/>
      </CharactersErrorImageContainer>

      <CharactersErrorInfo>
        <CharactersErrorNumber>404</CharactersErrorNumber>
        <CharactersErrorTitle>No results found</CharactersErrorTitle>
        <CharactersErrorDescription>We couldn't find what you searched for. <br/>Try searching again</CharactersErrorDescription>
      </CharactersErrorInfo>

    </CharactersErrorContainer>
  )
}
