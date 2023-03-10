import styled from '@emotion/styled';
import {colorsUI} from '../../../../assets/colors';
import { ColorCard } from './';

const ColorListContainer = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media ( max-width: 900px ) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ColorList = () => {
  return (
    <ColorListContainer>
      {
        colorsUI.map( colorUI => (
          <ColorCard key={colorUI.name} {...colorUI}/>
        ))
      }
    </ColorListContainer>
  )
}
