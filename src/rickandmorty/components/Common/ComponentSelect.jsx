import styled from "@emotion/styled"

const ComponentSelectField = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentSelectLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  display: block;
  margin-bottom: .5rem;
`;

const ComponentSelectSelectElement = styled.select`
  font-size: 1.4rem;
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: 1rem;
  max-width: 100%;
`;

const ComponentSelectOption = styled.option`
  font-weight: bold;
`;

export {
  ComponentSelectField,
  ComponentSelectLabel,
  ComponentSelectSelectElement,
  ComponentSelectOption
}