import styled from "@emotion/styled";

const ComponentCardCharacterContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: all .3s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.095);
  background-color: #fff;;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

const ComponentCardCharacterImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ComponentCardCharacterImage = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const ComponentCardCharacterInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const ComponentCardCharacterName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.75rem;
  color: #424250;
`;

const ComponentCardCharacterId = styled.span`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 300;
  display: block;
`;

const ComponentCardCharacterStatus = styled.div`
  border-radius: 50%;
  padding: 0;
  width: 10px;
  height: 10px;
`;

export {
  ComponentCardCharacterContainer,
  ComponentCardCharacterImageContainer,
  ComponentCardCharacterImage,
  ComponentCardCharacterInfo,
  ComponentCardCharacterName,
  ComponentCardCharacterId,
  ComponentCardCharacterStatus
}