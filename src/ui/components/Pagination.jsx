import styled from "@emotion/styled";
import { useSelector } from "react-redux"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useCounter } from "../../rickandmorty/hooks";
import { useEffect } from "react";
import { ComponentButton } from "../../rickandmorty/components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  svg {
    font-size: 2.4rem;
    background-color: var(--button-color);
    border-radius: 50%;
    color: #fff;
    transition: all .4s;
    cursor: pointer;

    &:hover {
      background-color: var(--button-color-2);
    }
  }
`
const PaginationNumber = styled.p`
  font-size: 1.6rem;
`;

export const Pagination = ({ onNewUrl }) => {

  const pagination = useSelector( store => store.pagination );
  const { name, status, gender, species } = useSelector( store => store.search );
  const characters = useSelector( store => store.characters );
  const { counter, onIncrementCounter, onDecrementCounter, onSetCounter } = useCounter( 1, pagination?.pages );

  const onNextUrl = () => {
    onNewUrl( pagination.next )
    onIncrementCounter();
  }

  const onPreviousUrl = () => {
    onNewUrl( pagination.prev )
    onDecrementCounter();
  } 

  useEffect( () => {
    onSetCounter( 1 );
  }, [name, status, gender, species]);

  return (
    <PaginationContainer>
      {
        (characters.length) ? (
          <>
            <ComponentButton style={{ borderRadius: '100px' }}>{ pagination?.count } characters</ComponentButton>

            <PaginationBox>
              <NavigateBeforeIcon onClick={ onPreviousUrl } style={{ display: pagination.prev ? 'block' : 'none' }} />
              <PaginationNumber>{counter}</PaginationNumber>
              <NavigateNextIcon onClick={ onNextUrl } style={{ display: pagination.next ? 'block' : 'none' }}/>
            </PaginationBox>
          </>
        ) : ( null )
      }
    </PaginationContainer>
  )
}
