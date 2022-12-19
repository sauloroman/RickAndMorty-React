import styled from "@emotion/styled"

const ComponentEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ComponentEmptyImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentEmptyImage = styled.img`
  width: 30rem;
`;

const ComponentEmptyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const ComponentEmptyNumber = styled.p`
  font-weight: 900;
  font-size: 8rem;
  letter-spacing: 20px;
  color: #6684CF;
  `;

const ComponentEmptyTitle = styled.h2`
  color: #6684CF;
  font-weight: 900;
  letter-spacing: 10px;
  font-size: 3rem;
  text-transform: uppercase;
`;

const ComponentEmptyDescription = styled.p`
  text-align: center;
  line-height: 1.7;
  font-weight: 500;
  font-size: 1.4rem;
`;

export {
  ComponentEmptyContainer,
  ComponentEmptyImageContainer,
  ComponentEmptyImage,
  ComponentEmptyInfo,
  ComponentEmptyNumber,
  ComponentEmptyTitle,
  ComponentEmptyDescription
}