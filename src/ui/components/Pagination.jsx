import styled from "@emotion/styled";
import { useSelector } from "react-redux"

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationAmount = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  background-color: #1864ab;
  padding: 1rem;
  border-radius: 100px;
  color: #fff;  
`;

const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  svg {
    font-size: 2.4rem;
    background-color: #1864ab;
    border-radius: 50%;
    color: #fff;
    transition: all .4s;
    cursor: pointer;

    &:hover {
      background-color: #228be6;
    }
  }
`
const PaginationNumber = styled.p`
  font-size: 1.6rem;
`;

export const Pagination = ({ onNewUrl }) => {

  const pagination = useSelector( store => store.pagination );
  const numberPage = String( pagination?.next?.at(-1) ) - '1';

  const onNextUrl = () => {
    onNewUrl( pagination.next )
  }

  const onPreviousUrl = () => {
    onNewUrl( pagination.prev )
  }

  return (
    <PaginationContainer>
      <PaginationAmount>{ pagination?.count } characters</PaginationAmount>

      <PaginationBox>
        <NavigateBeforeIcon onClick={ onPreviousUrl } style={{ display: pagination.prev ? 'block' : 'none' }} />
        <PaginationNumber>{numberPage || 1 }</PaginationNumber>
        <NavigateNextIcon onClick={ onNextUrl } style={{ display: pagination.next ? 'block' : 'none' }}/>
      </PaginationBox>

    </PaginationContainer>
  )
}
