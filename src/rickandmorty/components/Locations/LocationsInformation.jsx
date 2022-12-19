import styled from "@emotion/styled";
import { useSelector } from "react-redux"
import MapIcon from '@mui/icons-material/Map';

const LocationsInformationContainer = styled.div`
  height: 20rem;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  background-position: 50% 65%;
  position: relative;
  box-shadow: 0 3px 3px rgba(0, 0, 0, .2);

  display: flex;
  align-items: center;
  padding: 3rem;
  justify-content: space-around;

  svg {
    position: absolute;
    top: 15%;
    left: 5%;
    color: #fff;
    font-size: 3rem;
  }
`;

const LocationsTitleContainer = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: 15px;
  color: #fff;
`

const LocationsTitle = styled.h1`
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 3.2rem;
  `;

const LocationsTitleText = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
`

const LocationsInformationContent = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
`

export const LocationsInformation = () => {
  const { information } = useSelector( store => store.location );
  const { id, name, type, dimension, residents } = !!information && information;

  return (
    <LocationsInformationContainer style={{
      backgroundImage: `linear-gradient( to right bottom, rgba(50, 52, 94, 0.65), rgba(50, 52, 94, 0.65)), 
      url('../../../../public/img/banner-${Math.ceil( Math.random() * 6 )}.webp')`
    }}>

      <MapIcon />

      <LocationsTitleContainer>
        <LocationsTitle>{name}</LocationsTitle>
        <LocationsTitleText>{dimension}</LocationsTitleText>
      </LocationsTitleContainer>

      <LocationsInformationContent>
        <p>Id: {id}</p>
        <p>Type: {type}</p>
        <p>Residents: {residents?.length}</p>
      </LocationsInformationContent>
    </LocationsInformationContainer>
  )
}
